import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { commaThree } from "@/utils/comma-three";
import { toSlug } from "@/utils/to-slug";
import Image from "next/image";
import Link from "next/link";

import { ProductProps } from "@/types/products-t";
import WhishlistCardButtons from "./wishlist-card-buttons";

interface WishlistCardProps {
  wishlist: ProductProps;
}

export default function WishlistCard({ wishlist }: WishlistCardProps) {
  return (
    <Link href={`/market/product/${wishlist._id}/${toSlug(wishlist.name)}`}>
      <Card className="hover:ring-primary hover:ring-2 duration-150 ">
        <CardHeader>
          <Image
            src={
              !wishlist.image || wishlist.image.trim() === ""
                ? "/placeholder.svg"
                : wishlist.image
            }
            alt={wishlist.name}
            width={1980}
            height={1080}
          />
          <CardTitle className="truncate">
            {wishlist.name +
              " " +
              commaThree(wishlist.weight_or_volume) +
              " " +
              wishlist.unit}
          </CardTitle>
          <CardDescription>
            {wishlist.is_active ? "موجود" : "ناموجود"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-end text-lg">
            {commaThree(wishlist.price)}{" "}
            <span className=" font-semibold">تومان</span>
          </div>
        </CardContent>
        <CardFooter className="grid grid-cols-9 gap-2">
          <WhishlistCardButtons wishlist={wishlist} />
        </CardFooter>
      </Card>
    </Link>
  );
}
