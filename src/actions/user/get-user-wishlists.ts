"use server";

import { auth } from "@/auth";
import dbConnect from "@/lib/db";
import { User } from "@/models/user";
import { serializeDoc } from "../products/serializeDoc";
import { Product } from "@/models/products";
import { ProductProps } from "@/types/products-t";

type GetUserWishlistsProps =
  { success: true; data: ProductProps[] } | { success: false; error: string };

export async function getUserWishlists(): Promise<GetUserWishlistsProps> {
  try {
    await dbConnect();

    const session = await auth();
    if (!session?.user) {
      return { success: false, error: `لطفا احراز هویت کنید.` };
    }

    const user = await User.findById(session.user.id)
      .select("wishlists")
      .lean();
    if (!user) {
      return { success: false, error: `کاربر یافت نشد.` };
    }

    const user_wishlists = await Product.find({
      _id: { $in: user.wishlists || [] },
    }).lean();

    return { success: true, data: user_wishlists.map(serializeDoc) };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      error: `مشکلی پیش آمده است. لطفا دوباره تلاش کنید.`,
    };
  }
}
