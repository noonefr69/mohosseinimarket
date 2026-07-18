import { getUser } from "@/actions/user/get-user";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CircleAlertIcon, XIcon } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EditAddressForm } from "@/components/profile/form";

export default async function ProfileUi() {
  const result = await getUser();
  if (!result.success) return <div>{result.error}</div>;

  const user = result.data;

  return (
    <div>
      {!user.address || user.address.trim() === "" ? (
        <Card className="bg-destructive/20 ring-0">
          <CardContent className="flex items-center justify-between">
            <h1 className="text-destructive font-semibold lg:text-xl flex items-center gap-2">
              <CircleAlertIcon />
              آدرس مشخص ندارید. لطفا آدرس خود را وارد نمایید.
            </h1>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant={"outline"} size={"lg"}>
                  اضافه کردن آدرس
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
                    لطفا آدرس دقیق وارد کنید تا در زمان ارسال سفارش به مشکل
                    نخورد. بعداً اگر خواستید می‌توانید آدرس را در بخش اطلاعات
                    شخصی ویرایش کنید.
                  </DialogDescription>
                </DialogHeader>
                <EditAddressForm />
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}
