"use client";

import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useCartStore } from "@/store/cart-store";
import { Trash2Icon } from "lucide-react";
import { toast } from "sonner";

export default function ClearCartButton() {
  const clearCart = useCartStore((state) => state.clearCart);
  const items = useCartStore((state) => state.items);

  if (items.length === 0) return null;

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="icon" variant="destructive">
          <Trash2Icon />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            آیا میخواهید سبد خرید را خالی کنید؟
          </AlertDialogTitle>
          <AlertDialogDescription>
            بعد از تایید این کار سبد خرید شما خالی می شود.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>انصراف</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              clearCart();
              toast.success("سبد خرید شما با موفقیت خالی شد.");
            }}
          >
            تایید
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
