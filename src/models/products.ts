import { Schema, model, models, Types } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
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
    stock: {
      type: Number,
      default: 0,
      min: 0,
      max: 1000,
    },
    image: {
      type: String,
      default: "",
    },
    is_active: {
      type: Boolean,
      required: true,
      default: true,
    },
    category: {
      type: Types.ObjectId,
      ref: "Category",
      required: true,
    },
    brand: {
      type: String,
      trim: true,
    },
    unit: {
      type: String,
    },
    weight_or_volume: {
      type: Number,
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true },
);

export const Product = models.Product || model("Product", productSchema);
