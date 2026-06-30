"use server";

import dbConnect from "@/lib/db";
import { Product } from "@/models/products";
import { serializeDoc } from "./serializeDoc";
import { GetProductsResult } from "@/types/products-t";

export async function getSimilarProducts(
  category_id: string,
  excludeId: string,
): Promise<GetProductsResult> {
  try {
    await dbConnect();
    const result = await Product.find({
      category: category_id,
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
