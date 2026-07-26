import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { commaThree } from "@/utils/comma-three";
import { ProductProps } from "@/types/products-t";
import { toSlug } from "@/utils/to-slug";
import { categories } from "@/consts/categories";
import ProductButton from "./product-card/product-button";

export default function ProductCart({
  item,
  cardClassName,
}: {
  item: ProductProps;
  cardClassName?: string;
}) {
  const category = categories.find((c) => c.name_fa === item.category.name);
  const category_name_fa = category?.name_fa;

  return (
    <div key={item._id}>
      <Link href={`/market/product/${item._id}/${toSlug(item.name)}`}>
        <Card
          className={`hover:ring-2 hover:ring-primary duration-75 ${cardClassName}`}
        >
          <CardHeader className="bg-accent/70 mx-4 p-0">
            <Image
              src={
                !item.image || item.image.trim() === ""
                  ? "/placeholder.svg"
                  : item.image
              }
              alt={item.name}
              width={200}
              height={200}
              className="w-full h-72 object-cover rounded"
            />
          </CardHeader>
          <CardContent className="text-center">
            <h1 className="text-lg sm:text-2xl mb-2 font-semibold tracking-tight truncate">
              {item.name}
            </h1>
            <p className="text-muted-foreground font-semibold truncate">
              {category_name_fa}
            </p>
          </CardContent>
          <CardFooter className="grid grid-cols-[1fr_auto_1fr] p-2">
            <ProductButton button_variant="ghost" item={item} />

            <Separator
              orientation="vertical"
              className="h-auto w-px shrink-0 mx-2 "
            />

            <Button
              disabled
              className="py-6 whitespace-normal wrap-break-word hover:ring duration-100 disabled:opacity-100 disabled:text-accent-foreground font-semibold"
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
