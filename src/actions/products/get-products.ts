"use server";
import dbConnect from "@/lib/db";
import { Product } from "@/models/products";
import { serializeDoc } from "./serializeDoc";
import { GetProductsResult } from "@/types/products-t";

interface FilterParams {
  categoryId?: string;
  brand?: string;
  tag?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: string;
}

export async function getProducts({
  categoryId,
  brand,
  tag,
  minPrice,
  maxPrice,
  sortBy,
}: FilterParams = {}): Promise<GetProductsResult> {
  try {
    await dbConnect();

    const query: Record<string, unknown> = { is_active: true };

    if (categoryId) query.category = categoryId;
    if (brand) query.brand = brand;
    if (tag) query.tags = tag;
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) (query.price as Record<string, number>).$gte = minPrice;
      if (maxPrice) (query.price as Record<string, number>).$lte = maxPrice;
    }

    let sort: Record<string, 1 | -1> = {};
    switch (sortBy) {
      case "newest":
        sort = { createdAt: -1 };
        break;
      case "oldest":
        sort = { createdAt: 1 };
        break;
      case "cheapest":
        sort = { price: 1 };
        break;
      case "expensive":
        sort = { price: -1 };
        break;
      default:
        sort = {};
    }

    const products = await Product.find(query)
      .sort(sort)
      .populate("category")
      .lean();

    return { success: true, data: products.map(serializeDoc) };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      error: "مشکلی پیش آمده است. لطفا با پشتیبانی تماس بگیرید.",
    };
  }
}
