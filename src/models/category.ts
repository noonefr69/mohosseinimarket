import { Schema, model, models } from "mongoose";

const categorySchema = new Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    name_fa: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
    },
    sub_category: [
      {
        slug: String,
        name_fa: String,
      },
    ],
  },
  { timestamps: true },
);

export const Category = models.Category || model("Category", categorySchema);
