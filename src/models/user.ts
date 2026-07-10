import { Schema, model, models, Types } from "mongoose";

const UserSchema = new Schema(
  {
    phone: {
      type: String,
      required: true,
      unique: true,
      match: /^09\d{9}$/,
    },
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true },
);

export const User = models.User || model("User", UserSchema);
