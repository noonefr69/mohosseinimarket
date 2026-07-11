"use server";

import { auth } from "@/auth";
import dbConnect from "@/lib/db";
import { Order } from "@/models/orders";
import { User } from "@/models/user";
import { serializeDoc } from "../products/serializeDoc";

export async function getOrders() {
  try {
    await dbConnect();

    const session = await auth();
    if (!session?.user) {
      return { success: false, error: "لطفا ابتدا وارد حساب کاربری خود شوید." };
    }

    const user = await User.findById(session.user.id);
    if (!user) return { success: false, error: "کاربر یافت نشد." };
    if (!user.address) {
      return {
        success: false,
        error: "لطفاً ابتدا آدرس خود را در پروفایل تکمیل کنید.",
      };
    }

    const orders = await Order.find({
      userId: session.user.id,
    })
      .sort({ createdAt: -1 })
      .lean();

    return { success: true, data: orders.map(serializeDoc) };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      error:
        "مشکلی پیش آمده است لطفا بعدا دوباره امتحان کنید یا با پشتیبانی تماس بگیرید.",
    };
  }
}
