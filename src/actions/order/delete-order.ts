"use server";

import { auth } from "@/auth";
import dbConnect from "@/lib/db";
import { Order } from "@/models/orders";
import { User } from "@/models/user";
import { revalidatePath } from "next/cache";

export async function deleteOrder(orderId: string) {
  try {
    await dbConnect();

    const session = await auth();
    if (!session?.user) {
      return { success: false, error: "لطفا ابتدا وارد حساب کاربری خود شوید." };
    }

    const user = await User.findById(session.user.id);
    if (!user) return { success: false, error: "کاربر یافت نشد." };

    await Order.findByIdAndDelete(orderId);

    revalidatePath("/shopping-cart");

    return { success: true, message: "سفارش شما لغو و پاک شد." };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      error:
        "مشکلی پیش آمده است لطفا بعدا دوباره امتحان کنید و یا با پشتیبانی تماس بگیرید.",
    };
  }
}
