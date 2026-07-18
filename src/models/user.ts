import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    phone: {
      type: String,
      required: true,
      unique: true,
      match: /^09\d{9}$/,
    },
    email: {
      type: String,
      unique: true,
      sparse: true,
    },
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    wishlists: {
      type: [String],
      default: [],
    },
    address: {
      type: String,
      default: "",
    },
  },
  { timestamps: true },
);

export const User = models.User || model("User", UserSchema);
