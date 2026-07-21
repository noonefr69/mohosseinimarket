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

export async function CheckoutAction(items: ClientCartItem[]) {
  try {
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

    const order = await Order.create({
      user: user._id,
      items: orderItems,
      totalPrice: totalPrice,
      status: "pending",
      shippingAddress: user.address,
      phone: user.phone,
      validationImage: "",
      adminNote: "",
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
