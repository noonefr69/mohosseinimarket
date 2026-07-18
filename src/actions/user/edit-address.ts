"use server";

import { auth } from "@/auth";
import dbConnect from "@/lib/db";
import { User } from "@/models/user";
import { revalidatePath } from "next/cache";

export async function editAddress(new_address: string) {
  try {
    await dbConnect();

    const session = await auth();
    if (!session?.user) {
      return { success: false, error: `لطفا احراز هویت کنید.` };
    }

    if (
      !new_address ||
      typeof new_address !== "string" ||
      !new_address.trim()
    ) {
      return { success: false, error: `فرمت آدرس اشتباه است.` };
    }

    const user = await User.exists({ _id: session.user.id });
    if (!user) {
      return { success: false, error: `کاربر یافت نشد.` };
    }

    const updated_user = await User.findByIdAndUpdate(
      session.user.id,
      {
        address: new_address.trim(),
      },
      { new: true },
    );

    revalidatePath("/profile");

    return { success: true, data: JSON.stringify(updated_user) };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      error: `مشکلی پیش آمده است. لطفا بعدا دوباره امتحان کنید.`,
    };
  }
}
