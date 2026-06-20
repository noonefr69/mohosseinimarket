import { Schema, model, models } from "mongoose";

const contactUsSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      lowercase: true,
    },
    userDescription: {
      type: String,
      required: true,
    },
    userPhoneNumber: {
      type: String,
      required: true,
    },
    userSubject: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const ContactUs =
  models.ContactUs || model("ContactUs", contactUsSchema);
