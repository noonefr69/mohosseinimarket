"use client";

import { checkoutAction } from "@/actions/order/checkout-action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { useCartStore } from "@/store/cart-store";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import { useState, useTransition } from "react";
import { toast } from "sonner";

export default function CheckoutButton() {
  const [isPending, startTransition] = useTransition();
  const { items, clearCart } = useCartStore();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const MAX_FILE_SIZE = 2 * 1024 * 1024;

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("لطفا فقط فایل تصویری انتخاب کنید");
      e.target.value = "";
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      toast.error("حجم فایل نباید بیشتر از 2 مگابایت باشد");
      e.target.value = "";
      return;
    }

    if (previewUrl) URL.revokeObjectURL(previewUrl);
    const url = URL.createObjectURL(file);

    setPreviewUrl(url);
    setSelectedFile(file);
  }

  function handleRemoveImage() {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    setSelectedFile(null);
  }

  function handleOrder() {
    if (!selectedFile) {
      toast.error("لطفا تصویر مورد نظر را آپلود کنید");
      return;
    }

    startTransition(async () => {
      try {
        // 1. Create a new FormData object
        const formData = new FormData();

        // 2. Append your items (FormData only accepts strings or files, so we stringify the array)
        formData.append("items", JSON.stringify(items));

        // 3. Append the actual file object
        formData.append("validation_image", selectedFile);

        // 4. Pass the formData to your server action
        const result = await checkoutAction(formData);

        if (!result.success) {
          toast.error(result.error);
          return;
        }

        toast.success(`سفارش شما ثبت شد. لطفا منتظر تایید ادمین باشید.`);
        clearCart();
        handleRemoveImage();
      } catch (err) {
        console.error(err);
        toast.error(`مشکلی پیش آمده است. از متصل بودن اینترنت خود مطمئن شوید`);
      }
    });
  }

  return (
    <>
      <div className="mb-4">
        <Input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          id="add_image"
          className="hidden"
        />
        <label
          htmlFor="add_image"

          className="ring hover:bg-accent duration-150 h-10 flex w-full justify-center items-center cursor-pointer rounded"
        >
          اضافه کردن عکس رسید
          <PlusIcon />
        </label>

        {previewUrl && (
          <div className="relative w-full h-100 mt-4">
            <Image
              fill
              src={previewUrl}
              alt="Preview"
              className="w-full h-full object-cover rounded-lg border border-gray-300"
            />
            <button
              type="button"
              onClick={handleRemoveImage}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm shadow-md hover:bg-red-600"
            >
              ×
            </button>
          </div>
        )}
      </div>

      <Button
        disabled={isPending || !selectedFile}
        onClick={handleOrder}
        variant={"default"}
        className="w-full text-lg font-bold py-6"
        size={"lg"}
      >
        {isPending ? <Spinner /> : "خرید"}
      </Button>
    </>
  );
}
