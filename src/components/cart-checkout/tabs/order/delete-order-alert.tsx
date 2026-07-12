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
import { Button } from "@/components/ui/button";
import { Trash2Icon } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import { toPersianDigits } from "@/utils/to-persian-digits";

interface DeleteOrderAlertProps {
  orderId: string;
  isDeleting: boolean;
  onDelete: () => void;
}

export function DeleteOrderAlert({
  orderId,
  isDeleting,
  onDelete,
}: DeleteOrderAlertProps) {
  const shortId = toPersianDigits(orderId.slice(0, 6));

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button disabled={isDeleting} variant="destructive" size="icon-sm">
          {isDeleting ? <Spinner /> : <Trash2Icon />}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>لغو و پاک کردن سفارش</AlertDialogTitle>
          <AlertDialogDescription>
            آیا می‌خواهید سفارش #{shortId} را لغو و پاک کنید؟
            <br />
            این عمل غیرقابل بازگشت است.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="secondary">برگشت</AlertDialogCancel>
          <AlertDialogAction disabled={isDeleting} onClick={onDelete}>
            {isDeleting ? <Spinner /> : "تایید"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
