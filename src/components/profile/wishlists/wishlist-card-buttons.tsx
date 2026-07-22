"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import { MinusIcon, PlusIcon, ShoppingCartIcon, TrashIcon } from "lucide-react";
import { ProductProps } from "@/types/products-t";
import { commaThree } from "@/utils/comma-three";
import { toggleWishlists } from "@/actions/user/toggle-wishlist";
import { useTransition } from "react";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import { useRouter } from "next/navigation";

export default function WhishlistCardButtons({
  wishlist,
}: {
  wishlist: ProductProps;
}) {
  const [isPending, startTransition] = useTransition();
  const { items, addItem, removeItem } = useCartStore();
  const router = useRouter();

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();

    addItem({
      _id: wishlist._id,
      name: wishlist.name,
      price: wishlist.price,
      brand: wishlist.brand,
      description: wishlist.description,
      unit: wishlist.unit,
      weight_or_volume: wishlist.weight_or_volume,
      image: wishlist.image,
    });
  }

  function removeFromWishlist(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();

    removeItem(wishlist._id);
  }

  function handleDeleteFromWishlist(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();

    startTransition(async () => {
      try {
        const result = await toggleWishlists(wishlist._id);

        if (!result.success) {
          toast.error(result.error);
          return;
        }

        toast.success(`با موفقیت از لیست پاک شد`);
        router.refresh();
      } catch (err) {
        console.error(err);
        toast.error(`err`);
      }
    });
  }

  return (
    <>
      <Button
        onClick={handleDeleteFromWishlist}
        disabled={isPending}
        className="col-span-3 py-6 ring ring-destructive"
        variant={"destructive"}
      >
        {isPending ? <Spinner /> : <TrashIcon />}
      </Button>

      {items.some((item) => {
        return item._id === wishlist._id;
      }) ? (
        <div className="col-span-6 ring rounded grid grid-cols-3 items-center justify-center text-center">
          <Button className="py-6" onClick={handleClick} variant={"ghost"}>
            <PlusIcon />
          </Button>
          <span>
            {commaThree(
              items.find((item) => item._id === wishlist._id)?.quantity ?? 0,
            )}
          </span>
          <Button
            className="py-6"
            onClick={removeFromWishlist}
            variant={"ghost"}
          >
            <MinusIcon />
          </Button>
        </div>
      ) : (
        <Button
          onClick={handleClick}
          className="col-span-6 py-6 ring rounded"
          variant={"ghost"}
        >
          <ShoppingCartIcon className="-scale-x-90" />
          اضافه به سبد خرید
        </Button>
      )}
    </>
  );
}
