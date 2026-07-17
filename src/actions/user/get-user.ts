"use server";

import { auth } from "@/auth";
import dbConnect from "@/lib/db";
import { User } from "@/models/user";

export async function getUser() {
  try {
    await dbConnect();

    const session = await auth();
    if (!session?.user) {
      return { success: false, error: `لطفا احراز هویت کنید.` };
    }

    const user = await User.findById(session.user.id).lean();
    if (!user) {
      return { success: false, error: `کاربر یافت نشد.` };
    }

    return { success: true, data: JSON.parse(JSON.stringify(user)) };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      error: `مشکلی پیش آمده است. لطفا بعدا امتحان کنید.`,
    };
  }
}
