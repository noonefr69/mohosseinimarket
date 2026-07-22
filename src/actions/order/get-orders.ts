"use server";

import { auth } from "@/auth";
import dbConnect from "@/lib/db";
import { Order } from "@/models/order";
import { User } from "@/models/user";
import { serializeDoc } from "../products/serializeDoc";
import { OrdersProps } from "@/types/order-t";

export async function getOrders(): Promise<OrdersProps> {
  try {
    await dbConnect();

    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: "لطفا ابتدا وارد حساب کاربری خود شوید." };
    }

    const user = await User.findById(session.user.id).lean();
    if (!user) {
      return { success: false, error: `کاربر یافت نشد.` };
    }

    const orders = await Order.find({
      user: session.user.id,
    }).lean();

    return { success: true, data: orders.map(serializeDoc) };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      error: `مشکلی پیش آمده است. لطفا از متصل بودن اینترنت خود مطمعا شوید.`,
    };
  }
}
