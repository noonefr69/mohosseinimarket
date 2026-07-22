import { ProductProps } from "@/types/products-t";
import Image from "next/image";
import { Separator } from "../ui/separator";
import ButtonLink from "../button-link";
import { toSlug } from "@/utils/to-slug";
import { commaThree } from "@/utils/comma-three";
import ProductButton from "../product-card/product-button";
import WishListButton from "./buttons/wishlist-button";
import FullScreenButton from "./buttons/fullscreen-button";

interface ProductDetailsProps {
  product: ProductProps;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="grid lg:grid-cols-2 mt-4 gap-6">
      <div className="relative col-span-1 bg-accent min-h-72 lg:min-h-auto rounded">
        <FullScreenButton image={product.image ?? ""} />
        <WishListButton product_id={product._id} />
        <Image
          src={
            !product.image || product.image.trim() === ""
              ? "/placeholder.svg"
              : product.image
          }
          alt={product.description}
          fill
          // width={1980}
          // height={1080}
          className="rounded md:object-contain object-cover"
        />
      </div>
      <div>
        <h1 className="font-bold text-2xl">{product.name}</h1>
        <span className="flex items-center gap-1 mt-4 text-secondary-foreground/70 font-semibold">
          {commaThree(product.price)} <h6>تومان</h6>
        </span>
        <p className="mt-4 text-muted-foreground">{product.description}</p>
        <Separator className="my-6" />
        <ProductButton
          item={product}
          button_variant="default"
          divClassName="w-fit"
        />
        <Separator className="my-6" />
        <div className="flex items-center gap-2">
          <h5>تگ ها:</h5>
          <ul className="flex items-center gap-1">
            {product?.tags?.map((tag, i) => (
              <ButtonLink
                href={`/market/?tag=${toSlug(tag)}`}
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
              href={`/market/filter/?brand=${toSlug(product.brand ?? "")}`}
              text={product.brand}
              variant={"link"}
              buttonClassName="p-0"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
