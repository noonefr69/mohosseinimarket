import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit2Icon, XIcon } from "lucide-react";
import { EditAddressForm } from "./form";

export default function EditAddressDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="" variant={"outline"} size={"icon-sm"}>
          <Edit2Icon />
        </Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <DialogClose asChild>
              <Button variant={"outline"} size={"icon-sm"}>
                <XIcon />
              </Button>
            </DialogClose>
            <span className="font-semibold text-lg">
              آدرس جدید را وارد کنید.
            </span>
          </DialogTitle>
          <DialogDescription>
            لطفا آدرس دقیق وارد کنید تا در زمان ارسال سفارش به مشکل نخورد. بعداً
            اگر خواستید می‌توانید آدرس را در بخش اطلاعات شخصی ویرایش کنید.
          </DialogDescription>
        </DialogHeader>
        <EditAddressForm />
      </DialogContent>
    </Dialog>
  );
}
