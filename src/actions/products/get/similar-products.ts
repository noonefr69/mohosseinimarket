"use server";

import dbConnect from "@/lib/db";
import { Product } from "@/models/products";
import { serializeDoc } from "../serializeDoc";

export async function similarProducts(
  subcategory_slug_val: string,
  excludeId: string,
) {
  try {
    await dbConnect();
    const result = await Product.find({
      subcategory_slug: subcategory_slug_val,
      _id: { $ne: excludeId },
      is_active: true,
    })
      .limit(8)
      .lean();

    return { success: true, data: result.map(serializeDoc) };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      error: `مشکلی پیش آمده است. لطفا بعدا دوباره امتحان کنید.`,
    };
  }
}
