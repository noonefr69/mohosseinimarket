import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { commaThree } from "@/utils/comma-three";

export default function ProductCart(
  cardClassName: { cardClassName?: string },
  item: {
    _id: string | number;
    name: string;
    category_title_fa: string;
    price: number | string;
  },
) {
  return (
    <li key={item._id}>
      <Link href={`/market/${item.name}`}>
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
            <p className="text-muted-foreground font-semibold">
              {item.category_title_fa}
            </p>
          </CardContent>
          <CardFooter className="flex items-center gap-2 p-0 py-2 px-1 relative">
            <Button
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                alert("item " + item._id + " added");
              }}
              className="flex-1 w-10 h-14"
              variant={"ghost"}
            >
              خرید
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
    </li>
  );
}
