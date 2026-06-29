import { ProductProps } from "@/types/products-t";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import ButtonLink from "../button-link";
import { toSlug } from "@/utils/toSlug";
import { commaThree } from "@/utils/comma-three";
import { Fullscreen, HeartIcon } from "lucide-react";

interface ProductDetailsProps {
  product: ProductProps;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="grid lg:grid-cols-2 mt-4 gap-6">
      <div className="relative">
        <Button
          className="absolute top-2 right-2"
          variant={"outline"}
          size="icon"
        >
          <HeartIcon />
        </Button>
        <Button
          className="absolute top-12 right-2"
          size="icon"
          variant={"outline"}
        >
          <Fullscreen />
        </Button>
        <Image
          src={`/`}
          alt=""
          width={1980}
          height={1080}
          className="bg-accent rounded-2xl"
        />
      </div>
      <div>
        <h1 className="font-bold text-2xl">{product.name}</h1>
        <span className="flex items-center gap-1 mt-4 text-secondary-foreground/70 font-semibold">
          {commaThree(product.price)} <h6>تومان</h6>
        </span>
        <p className="mt-4 text-muted-foreground">{product.description}</p>
        <Separator className="my-6" />
        <Button size={"lg"} className="lg:text-lg font-semibold ">
          اضافه به سبد خرید
        </Button>
        <Separator className="my-6" />
        <div className="flex items-center gap-2">
          <h5>تگ ها:</h5>
          <ul className="flex items-center gap-1">
            {product.tags.map((tag, i) => (
              <ButtonLink
                href={`/market/filter/?tag=${toSlug(tag)}`}
                key={i}
                text={tag}
                variant={"link"}
                buttonClassName="p-0"
              />
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <h5>برند:</h5>
          <span className="flex items-center gap-1">
            <ButtonLink
              href={`/market/filter/?brand=${toSlug(product.brand_en)}`}
              text={product.brand_fa}
              variant={"link"}
              buttonClassName="p-0"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
