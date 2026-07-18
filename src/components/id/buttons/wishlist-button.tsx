"use client";

import { toggleWishlists } from "@/actions/user/toggle-wishlist";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { HeartIcon } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";

export default function WishListButton({ product_id }: { product_id: string }) {
  const [isPending, startTransition] = useTransition();
  const [isInList, setIsInList] = useState<boolean | null>(null);

  function handleToggleWishlist() {
    startTransition(async () => {
      try {
        const result = await toggleWishlists(product_id);

        if (!result.success) {
          toast.error(result.error);
          return;
        }

        setIsInList(result.data);
        toast.success(result.data ? "به لیست اضافه شد" : "از لیست حذف شد");
      } catch (err) {
        console.error(err);
        toast.error(
          `مشکلی پیش آمده است. لطفا از وصل بودن اینترنت خود اطمینان داشته باشید.`,
        );
      }
    });
  }

  return (
    <Button
      disabled={isPending}
      onClick={handleToggleWishlist}
      className="absolute top-12 right-2 z-10"
      variant={"outline"}
      size="icon"
    >
      {isPending ? <Spinner /> : <HeartIcon fill={isInList ? "red" : "none"} />}
    </Button>
  );
}
