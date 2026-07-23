"use server";

import { auth } from "@/auth";
import dbConnect from "@/lib/db";
import { Order } from "@/models/order";
import { User } from "@/models/user";
import { revalidatePath } from "next/cache";

export async function CancelOrderAction(orderId: string) {
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

    await Order.findByIdAndDelete(orderId);

    revalidatePath("/shopping-cart");
    revalidatePath("/profile/order");

    return { success: true, data: `سفارش شما با موفقیت لغو شد` };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      error: `مشکلی پیش آمده است. از متصل بودن اینترنت خود مطمعا شوید`,
    };
  }
}
