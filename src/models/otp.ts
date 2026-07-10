import { Schema, model, models, Types } from "mongoose";

const OtpSchema = new Schema(
  {
    phone: {
      type: String,
      required: true,
      match: /^09\d{9}$/,
    },
    code: {
      type: String,
    },
    expiresAt: {
      type: Date,
      required: true,
      default: () => new Date(Date.now() + 2 * 60 * 1000), // 2 minutes from now
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

OtpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 300 });

export const Otp = models.Otp || model("Otp", OtpSchema);
