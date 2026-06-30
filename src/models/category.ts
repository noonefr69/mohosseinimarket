import { Schema, model, models } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    icon: {
      type: String,
    },
  },
  { timestamps: true },
);

export const Category = models.Category || model("Category", categorySchema);
