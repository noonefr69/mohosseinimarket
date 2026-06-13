"use server";

import dbConnect from "@/lib/db";
import { Category } from "@/models/category-schema";

export async function getCategories() {
  try {
    await dbConnect();
    const categories = await Category.find({}).lean();
    return { success: true, data: categories };
  } catch (error) {
    return { success: false, error: "بارگیری فهرست ها ناموفق بود." };
  }
}
