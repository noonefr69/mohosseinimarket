"use client";

import ButtonLink from "@/components/button-link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCartStore } from "@/store/cart-srote";
import { commaThree } from "@/utils/comma-three";
import { toSlug } from "@/utils/to-slug";
import {
  ChevronLeftIcon,
  Icon,
  LogInIcon,
  MinusIcon,
  PackageOpen,
  PlusIcon,
  Trash2Icon,
} from "lucide-react";
import Image from "next/image";
import React from "react";
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
import { toast } from "sonner";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import Link from "next/link";

export default function ShoppingCart() {
  const items = useCartStore((state) => state.items);
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <div className="grid grid-cols-9 gap-4 relative">
      <Tabs defaultValue="shopping-cart" className="col-span-9 lg:col-span-6">
        <TabsList variant={"line"} className="w-full flex justify-between">
          <div className="flex items-center gap-2">
            <TabsTrigger
              className="cursor-pointer max-w-32"
              value="shopping-cart"
            >
              سبد خرید شما
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer max-w-32" value="orders">
              سفارشات
            </TabsTrigger>
          </div>
          {items.length === 0 ? null : (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button size={"icon"} variant="destructive">
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
          )}
        </TabsList>
        <TabsContent className="flex flex-col gap-2" value="shopping-cart">
          {items.length === 0 ? (
            <Empty>
              <EmptyHeader>
                <EmptyMedia className="size-20" variant="icon">
                  <PackageOpen className="size-10" />
                </EmptyMedia>
                <EmptyTitle className="text-2xl font-semibold">
                  سبد خرید شما خالی است!
                </EmptyTitle>
                <EmptyDescription>
                  می‌توانید برای مشاهده محصولات بیشتر به صفحه زیر بروید:
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <ButtonLink
                  href="/market"
                  text={"فروشگاه"}
                  variant={"secondary"}
                />
              </EmptyContent>
            </Empty>
          ) : (
            items.map((item, index) => (
              <React.Fragment key={item._id}>
                <div className="flex gap-4 hover:bg-accent/10 duration-150 p-2 rounded">
                  <div className="flex flex-col items-center h-fit gap-3">
                    <ButtonLink
                      text={
                        <Image
                          className=""
                          src={`/`}
                          alt="img"
                          width={140}
                          height={170}
                        />
                      }
                      href={`/market/product/${item._id}/${toSlug(item.name)}`}
                      variant={"ghost"}
                      linkClassName="h-full"
                    />
                    <div className="flex items-center gap-2 ring rounded overflow-hidden">
                      <Button
                        onClick={() =>
                          addItem({
                            _id: item._id,
                            name: item.name,
                            price: item.price,
                          })
                        }
                        className="hover:opacity-100 lg:opacity-60 text-accent-foreground rounded ring-0 border-0 outline-0 bg-transparent"
                        variant={"link"}
                        size={"icon"}
                      >
                        <PlusIcon />
                      </Button>
                      <span className="text-lg">
                        {commaThree(item.quantity)}
                      </span>
                      <Button
                        onClick={() => removeItem(item._id)}
                        className="hover:opacity-100 lg:opacity-60 text-accent-foreground rounded ring-0 border-0 outline-0 bg-transparent"
                        variant={"link"}
                        size={"icon"}
                      >
                        <MinusIcon />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col h-full justify-between">
                    <h1 className="text-lg font-bold">{item.name}</h1>
                    <h2 className="text-muted-foreground">
                      {item.description}
                    </h2>
                    <h3 className="text-muted-foreground">{item.brand}</h3>
                    <h4 className="text-muted-foreground">
                      {commaThree(item.weight_or_volume)} {item.unit}
                    </h4>
                    <h5 className="font-semibold mt-6">
                      {commaThree(item.price * item.quantity)} تومان{" "}
                    </h5>
                  </div>
                </div>
                {index < items.length - 1 && <Separator />}
              </React.Fragment>
            ))
          )}
        </TabsContent>
        <TabsContent value="orders">
          <Empty>
            <EmptyHeader>
              <EmptyMedia className="size-20" variant="icon">
                <PackageOpen className="size-10" />
              </EmptyMedia>
              <EmptyTitle className="text-2xl font-semibold">
                سفارشی ندارید
              </EmptyTitle>
              <EmptyDescription>
                می‌توانید برای سفارش محصولات جدید به صفحه زیر بروید:
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <ButtonLink
                href="/market"
                text={"فروشگاه"}
                variant={"secondary"}
              />
            </EmptyContent>
          </Empty>
        </TabsContent>
      </Tabs>
      <Card className="col-span-9 sticky lg:top-28 bottom-4 lg:col-span-3 h-fit">
        {items.length === 0 ? (
          <Link href={`/sign-in`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-1">
                <LogInIcon />
                ورود به حساب کاربری
              </CardTitle>
              <CardAction>
                <ChevronLeftIcon />
              </CardAction>
              <CardDescription>
                برای مشاهده محصولاتی که پیش‌تر به سبد خرید خود اضافه کرده‌اید
                وارد شوید.
              </CardDescription>
            </CardHeader>

            <CardContent></CardContent>
          </Link>
        ) : (
          <>
            <CardHeader>
              <CardTitle>تعداد کل کالاها</CardTitle>
              <CardAction>
                {commaThree(
                  items.reduce((prev, next) => {
                    return prev + next.quantity;
                  }, 0),
                )}{" "}
                عدد
              </CardAction>
            </CardHeader>
            <CardHeader>
              <CardTitle>قیمت کل</CardTitle>
              <CardAction>
                {commaThree(
                  items?.reduce((sum, item) => {
                    return sum + item.price * item.quantity;
                  }, 0),
                )}
                تومان
              </CardAction>
            </CardHeader>
            <CardContent>
              <Button
                variant={"default"}
                className="w-full text-lg font-bold py-6"
                size={"lg"}
              >
                ادامه خرید
              </Button>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  );
}
