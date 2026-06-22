import { getCategories } from "@/actions/categories";
import { getProducts } from "@/actions/products";
import Image from "next/image";
import Link from "next/link";
import ProductCart from "@/components/product-card";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowDownWideNarrow,
  ChevronDown,
  SlidersHorizontal,
  XIcon,
} from "lucide-react";
import { toPersianDigits } from "@/utils/to-persian-digits";
import ButtonLink from "@/components/button-link";
import React from "react";

export default async function Market() {
  const result_of_products = await getProducts();
  const result_of_categories = await getCategories();

  if (!result_of_products.success) {
    return <div>{result_of_products.error}</div>;
  }
  if (!result_of_categories.success) {
    return <div>{result_of_categories.error}</div>;
  }

  const sorted_values = [
    {
      _id: 1,
      name_fa: "مرتبط ترین",
      name_en: "related",
    },
    {
      _id: 2,
      name_fa: "جدید ترین",
      name_en: "newest",
    },
    {
      _id: 3,
      name_fa: "ارزان ترین",
      name_en: "cheapest",
    },
    {
      _id: 4,
      name_fa: "گران ترین",
      name_en: "expensive",
    },
  ];

  return (
    <div>
      <div className="md:flex md:items-center md:justify-evenly md:flex-wrap mt-7 gap-6 hidden">
        {result_of_categories.data.map((category) => (
          <Link
            href={`/market/${category.slug}`}
            key={category._id}
            className="flex items-center gap-2 hover:shadow-sm shadow-xs p-2 duration-150 ring-primary/10 rounded-2xl ring hover:ring-primary overflow-hidden"
          >
            <Image
              src={`/`}
              alt={`category.name_fa`}
              width={26}
              height={26}
              className="bg-accent rounded-full h-8 w-8 md:w-16 md:h-16"
            />
            <div>
              <h1 className="font-semibold truncate md:text-base text-xs w-32 md:w-auto">
                {category.name_fa}
              </h1>
              <span className="text-[10px] md:text-sm text-muted-foreground">{`0 محصول`}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 mt-7">
        {/* filters for desktop */}
        <div className="hidden lg:block lg:col-span-3">
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle className="text-xl font-semibold">فیلتر ها</CardTitle>
              <CardAction>
                <ButtonLink
                  href="/market"
                  text={"حذف فیلترها"}
                  variant={"link"}
                  size={"xs"}
                />
              </CardAction>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-1 md:col-span-9">
          <div className="mb-2 hidden lg:flex items-center justify-between ">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="flex items-center justify-between gap-2"
                  variant="outline"
                >
                  مرتب سازی
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  {sorted_values.map((s) => (
                    <DropdownMenuItem asChild key={s._id}>
                      <ButtonLink
                        href={`?sorted=${s.name_en}`}
                        text={s.name_fa}
                        variant={"ghost"}
                        buttonClassName="w-full text-left"
                        linkClassName="text-right"
                      />
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <span>{toPersianDigits(result_of_products.data.length)} کالا</span>
          </div>

          <div className="lg:hidden flex mb-4 justify-between">
            <div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant={"ghost"}>
                    <SlidersHorizontal />
                    فیلتر
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom">
                  <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                      This action cannot be undone.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant={"ghost"}>
                    <ArrowDownWideNarrow />
                    مرتب سازی
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" showCloseButton={false}>
                  <SheetHeader>
                    <SheetTitle className="flex items-center gap-2">
                      <SheetClose asChild>
                        <Button className="" size={"icon"} variant={"ghost"}>
                          <XIcon />{" "}
                        </Button>
                      </SheetClose>
                      <span className="text-xl font-semibold">
                        مرتب سازی بر اساس
                      </span>
                    </SheetTitle>
                  </SheetHeader>
                  <ul className="flex flex-col">
                    {sorted_values.map((s, index) => (
                      <li key={s._id}>
                        <ButtonLink
                          href={`?sorted=${s.name_en}`}
                          text={s.name_fa}
                          variant="ghost"
                          buttonClassName="w-full justify-start py-6"
                          linkClassName="w-full text-right font-semibold text-lg"
                        />
                        {index !== sorted_values.length - 1 && (
                          <div className="mx-4 border-b border-border " />
                        )}
                      </li>
                    ))}
                  </ul>
                </SheetContent>
              </Sheet>
            </div>
            {result_of_products.data.length} کالا
          </div>

          {/* products */}
          <ul className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {result_of_products.data.map((p) => (
              <ProductCart item={p} key={p._id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
