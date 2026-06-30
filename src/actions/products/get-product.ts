"use server";

import dbConnect from "@/lib/db";
import { Product } from "@/models/products";
import { isValidObjectId } from "mongoose";
import { serializeDoc } from "./serializeDoc";
import { GetProductResult } from "@/types/products-t";
import "@/models/category";

export async function getProduct(proId: string): Promise<GetProductResult> {
  try {
    await dbConnect();

    if (!isValidObjectId(proId)) {
      return { success: false, error: "همچنین کالایی وجود ندارد." };
    }
    const product_by_id = await Product.findById(proId)
      .populate("category")
      .lean();

    if (!product_by_id)
      return { success: false, error: "همچنین کالایی وجود ندارد." };

    return { success: true, data: serializeDoc(product_by_id) };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      error: "مشکلی پیش آمده است. لطفا بعد از چند دقیقه دوباره امتحان کنید.",
    };
  }
}
