"use server";
import dbConnect from "@/lib/db";
import { Category } from "@/models/category";
import { GetCategoryResult } from "@/types/category-t";

function serializeDoc<T extends Record<string, unknown>>(doc: T) {
  return JSON.parse(JSON.stringify(doc)) as T;
}

export async function getCategories(): Promise<GetCategoryResult> {
  try {
    await dbConnect();
    const categories = await Category.find({}).lean();

    return {
      success: true,
      data: categories.map(serializeDoc),
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: `گرفتن دسته بندی ها از پایگاه داده امکان پزیر نیست.`
    };
  }
}
