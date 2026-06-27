"use server";
import dbConnect from "@/lib/db";
import { Product } from "@/models/products";
import { GetProductsResult } from "@/types/products-t";
import { isValidObjectId } from "mongoose";

function serializeDoc<T extends Record<string, unknown>>(doc: T) {
  return JSON.parse(JSON.stringify(doc)) as T;
}

export async function getProducts(): Promise<GetProductsResult> {
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

export async function getProductsById(proId: string) {
  try {
    await dbConnect();

    if (!isValidObjectId(proId)) {
      return { success: false, error: "همچنین کالایی وجود ندارد." };
    }
    const prodoct_by_id = await Product.findById(proId).lean();

    if (!prodoct_by_id)
      return { success: false, error: "همچنین کالایی وجود ندارد." };

    return { success: true, data: prodoct_by_id };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      error: "مشکلی پیش آمده است. لطفا بعد از چند دقیقه دوباره امتحان کنید.",
    };
  }
}
