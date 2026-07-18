"use server";

import { auth } from "@/auth";
import dbConnect from "@/lib/db";
import { Product } from "@/models/products";
import { User } from "@/models/user";
import mongoose from "mongoose";

export async function toggleWishlists(product_id: string) {
  try {
    if (!product_id || !mongoose.Types.ObjectId.isValid(product_id)) {
      return { success: false, error: "شناسه محصول نامعتبر است." };
    }

    await dbConnect();

    const session = await auth();
    if (!session?.user) {
      return { success: false, error: `لطفا احراز هویت کنید.` };
    }

    const user_exist = await User.exists({ _id: session.user.id });
    if (user_exist === null) {
      return { success: false, error: `کاربر یافت نشد.` };
    }

    const productExists = await Product.exists({ _id: product_id });
    if (!productExists) {
      return { success: false, error: "محصول مورد نظر یافت نشد." };
    }

    const user = await User.findById(session.user.id)
      .select("wishlists")
      .lean();

    const wishlistArray = user?.wishlists || []; // fallback to empty array
    const isInWishlist = wishlistArray.some(
      (id: string) => id.toString() === product_id,
    );

    if (isInWishlist) {
      await User.updateOne(
        { _id: session.user.id },
        { $pull: { wishlists: product_id } },
      );
    } else {
      await User.updateOne(
        { _id: session.user.id },
        { $addToSet: { wishlists: product_id } },
      );
    }

    return { success: true, data: !isInWishlist };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      error: `مشکلی پیش آمده است. لطفا از وصل بودن اینترنت خود مطمعا شوید.`,
    };
  }
}
