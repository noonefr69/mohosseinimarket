import { Schema, model, models } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    category_slug: {
      type: String,
      required: true,
      lowercase: true,
      index: true,
    },
    subcategory_slug: {
      type: String,
      lowercase: true,
      index: true,
    },
    unit: {
      type: String,
    },
    weight_or_volume: {
      type: Number,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    discount_percent: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
    final_price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
    is_active: {
      type: Boolean,
      default: true,
      index: true,
    },
    images: {
      type: [String],
      default: [],
    },
    tags: {
      type: [String],
      default: [],
    },
    description: {
      type: String,
      trim: true,
    },
    brand_en: {
      type: String,
      trim: true,
    },
    brand_fa: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true, // gives you createdAt + updatedAt automatically
  },
);

export const Product = models.Product || model("Product", productSchema);
