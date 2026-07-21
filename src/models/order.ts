import { Schema, model, models, Types } from "mongoose";
import "@/models/user";
import "@/models/products";

const orderSchema = new Schema(
  {
    user: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        productId: {
          type: Types.ObjectId,
          ref: "Product",
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        unit: String,
        weight_or_volume: Number,
      },
    ],
    status: {
      type: String,
      enum: ["pending", "uploaded", "verified", "rejected"],
      default: "pending",
    },
    quantity: {
      type: Number,
      required: true,
    },
    validation_image: {
      type: String,
      default: "",
    },
    total: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    admin_note: {
      type: String,
      default: null,
    },
  },
  { timestamps: true },
);

export const Order = models.Order || model("Order", orderSchema);
