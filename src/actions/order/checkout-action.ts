"use server";

import { auth } from "@/auth";
import dbConnect from "@/lib/db";
import { Order } from "@/models/order";
import { Product } from "@/models/products";
import { User } from "@/models/user";
import { revalidatePath } from "next/cache";

interface ClientCartItem {
  _id: string;
  quantity: number;
}

// ✅ Change the argument to accept FormData
export async function checkoutAction(formData: FormData) {
  try {
    // 1. Extract data from FormData
    const itemsJson = formData.get("items") as string;
    const items: ClientCartItem[] = JSON.parse(itemsJson);
    const file = formData.get("validation_image") as File;

    await dbConnect();

    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: "لطفا ابتدا وارد حساب کاربری خود شوید." };
    }

    if (!items || items.length === 0) {
      return { success: false, error: "سبد خرید شما خالی است." };
    }

    const user = await User.findById(session.user.id);
    if (!user) {
      return { success: false, error: "کاربر یافت نشد." };
    }
    if (!user.address) {
      return {
        success: false,
        error: "لطفاً ابتدا آدرس خود را در پروفایل تکمیل کنید.",
      };
    }

    const productIds = items.map((item) => item._id);
    const quantityMap: Record<string, number> = {};
    items.forEach((item) => {
      quantityMap[item._id] = item.quantity;
    });

    const dbProducts = await Product.find({ _id: { $in: productIds } }).lean();
    if (dbProducts.length !== items.length) {
      return {
        success: false,
        error: "برخی از کالاهای سبد خرید شما حذف شده‌اند.",
      };
    }

    const orderItems = [];
    let totalPrice = 0;

    for (const dbProduct of dbProducts) {
      const quantity = quantityMap[dbProduct._id.toString()];
      if (!quantity || quantity <= 0) continue;

      const itemTotal = dbProduct.price * quantity;
      totalPrice += itemTotal;

      orderItems.push({
        productId: dbProduct._id,
        name: dbProduct.name,
        price: dbProduct.price,
        quantity: quantity,
        unit: dbProduct.unit,
        weight_or_volume: dbProduct.weight_or_volume,
      });
    }

    if (orderItems.length === 0) {
      return { success: false, error: "سبد خرید شما معتبر نیست." };
    }

    const totalQuantity = orderItems.reduce(
      (sum, item) => sum + item.quantity,
      0,
    );

    // ✅ 2. Process the file: Convert it to a Base64 string to save in MongoDB
    let validationImageString = "";
    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer(); // Get raw file data
      const buffer = Buffer.from(bytes); // Convert to Node.js Buffer
      // Create a proper Data URL (e.g., "data:image/jpeg;base64,/9j/4AAQSk...")
      validationImageString = `data:${file.type};base64,${buffer.toString("base64")}`;
    }

    // ✅ 3. Save the Base64 string to the database
    const order = await Order.create({
      user: user._id,
      items: orderItems,
      status: "pending",
      address: user.address,
      total: String(totalPrice),
      quantity: totalQuantity,
      validation_image: validationImageString, // ✅ NOW IT IS SAVED!
      admin_note: "",
    });

    revalidatePath("/profile");

    return {
      success: true,
      data: { orderId: order._id.toString() },
    };
  } catch (err) {
    console.error("Checkout error:", err);
    return {
      success: false,
      error: "مشکلی پیش آمده است. لطفاً چند دقیقه دیگر امتحان کنید.",
    };
  }
}
