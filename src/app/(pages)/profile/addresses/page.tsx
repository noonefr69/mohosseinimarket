import { getUser } from "@/actions/user/get-user";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EditAddressForm } from "@/components/profile/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OctagonXIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import EditAddressDialog from "@/components/profile/address/edit-address-dialog";

export default async function Addresses() {
  const result = await getUser();
  if (!result.success) return <div>{result.error}</div>;

  const user = result.data;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="lg:text-xl font-semibold text-primary">
          آدرس‌ها
        </CardTitle>
        <Separator className="mt-1" />
      </CardHeader>
      <CardContent className="">
        {!user.address || user.address.trim() === "" ? (
          <div className="flex flex-col items-center justify-center gap-2">
            <OctagonXIcon className="size-16" />
            <h1>هنوز آدرس ثبت نکرده‌اید.</h1>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant={"secondary"} size={"lg"}>
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
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <h1 className="font-semibold text-xl">آدرس شما:</h1>
              <span className="text-lg">{user.address}</span>
              <EditAddressDialog />
            </div>
            <p className="text-sm text-muted-foreground">
              به زودی قابلیت انتخاب آدرس با نقشه و توانایی اضافه کردن چند آدرس
              اضافه خواهد شد
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
