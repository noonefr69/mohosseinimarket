import { Schema, model, models, Types } from "mongoose";

const orderSchema = new Schema(
  {
    userId: {
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
    totalPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: ["pending", "paid", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    shippingAddress: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      match: /^09\d{9}$/,
    },
  },
  { timestamps: true },
);

export const Order = models.Order || model("Order", orderSchema);
