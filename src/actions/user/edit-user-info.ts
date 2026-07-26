"use server";

import { auth } from "@/auth";
import dbConnect from "@/lib/db";
import { edit_form_schema } from "@/lib/edit_form_schema";
import { User } from "@/models/user";
import { revalidatePath } from "next/cache";

export async function editUserInfo(formData: z.infer<typeof edit_form_schema>) {
  try {
    const validatedFields = edit_form_schema.safeParse(formData);
    if (!validatedFields.success) {
      return { success: false, error: "داده‌های ارسالی معتبر نیستند." };
    }

    await dbConnect();

    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: "لطفا احراز هویت کنید." };
    }

    const updatedUser = await User.findByIdAndUpdate(
      session.user.id,
      {
        phone: validatedFields.data.phone,
        email: validatedFields.data.email,
        first_name: validatedFields.data.first_name,
        last_name: validatedFields.data.last_name,
        address: validatedFields.data.address,
      },
      { new: true, runValidators: true },
    );

    if (!updatedUser) {
      return { success: false, error: "کاربر یافت نشد." };
    }

    revalidatePath("/profile/personal-info");

    return { success: true, data: null };
  } catch (err) {
    console.error("Edit User Info Error:", err);
    return {
      success: false,
      error: "مشکلی پیش آمده است. لطفا بعداً دوباره امتحان کنید.",
    };
  }
}
