"use server";

import dbConnect from "@/lib/db";
import { Product } from "@/models/products";
import { serializeDoc } from "./serializeDoc";
import { GetProductsResult } from "@/types/products-t";
import { isValidObjectId } from "mongoose";

export async function getProductsByCategory(
  id: string,
): Promise<GetProductsResult> {
  try {
    await dbConnect();

    if (!isValidObjectId(id)) {
      return { success: false, error: "دسته بندی معتبر نیست." };
    }

    const products = await Product.find({
      category: String(id),
      is_active: true,
    }).lean();

    return { success: true, data: products.map(serializeDoc) };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      error: `مشکلی پیش آمده است. لطفا با پشتیبامی تماس بگیرید.`,
    };
  }
}
