"use client";

import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { commaThree } from "@/utils/comma-three";
import { ProductProps } from "@/types/products-t";
import { toSlug } from "@/utils/to-slug";
import { categories } from "@/consts/categories";
import { useCartStore } from "@/store/cart-srote";

export default function ProductCart({
  item,
  cardClassName,
}: {
  item: ProductProps;
  cardClassName?: string;
}) {
  const add_item = useCartStore((state) => state.addItem);

  const category = categories.find((c) => c.name_fa === item.category.name);
  const category_name_fa = category?.name_fa;

  function handleAddItem(e: any) {
    e.stopPropagation();
    e.preventDefault();

    add_item({
      _id: item._id,
      name: item.name,
      price: item.price,
      brand: item.brand,
      description: item.description,
      unit: item.unit,
      weight_or_volume: item.weight_or_volume,
    });
  }

  return (
    <div key={item._id}>
      <Link href={`/market/product/${item._id}/${toSlug(item.name)}`}>
        <Card
          className={`hover:ring-2 hover:ring-primary duration-75 ${cardClassName}`}
        >
          <CardHeader className="bg-accent/70 mx-4 p-0">
            <Image src={"/"} alt={item.name} width={200} height={200} />
          </CardHeader>
          <CardContent className="text-center">
            <h1 className="text-lg sm:text-2xl mb-2 font-semibold tracking-tight truncate">
              {item.name}
            </h1>
            <p className="text-muted-foreground font-semibold truncate">
              {category_name_fa}
            </p>
          </CardContent>
          <CardFooter className="flex items-center gap-2 p-0 py-2 px-1 relative">
            <Button
              onClick={handleAddItem}
              className="flex-1 w-10 h-14"
              variant={"ghost"}
            >
              اضافه به سبد خرید
            </Button>

            <Separator orientation="vertical" className="" />
            <Button
              disabled
              className="flex-1 disabled:opacity-100 font-semibold disabled:cursor-default hover:bg-transparent w-10 h-14 "
              variant={"ghost"}
            >
              {commaThree(item.price)} تومان
            </Button>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
}
