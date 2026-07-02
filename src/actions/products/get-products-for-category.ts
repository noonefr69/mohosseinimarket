"use server";

import dbConnect from "@/lib/db";
import { Product } from "@/models/products";
import { GetProductsResult } from "@/types/products-t";
import { serializeDoc } from "./serializeDoc";

export async function getProductsForCategory(): Promise<GetProductsResult> {
  try {
    await dbConnect();
    const products = await Product.find({}).lean();

    return {
      success: true,
      data: products.map(serializeDoc),
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: "مشکلی پیش آمده است. لطفا بعد از چند دقیقه دوباره امتحان کنید.",
    };
  }
}
