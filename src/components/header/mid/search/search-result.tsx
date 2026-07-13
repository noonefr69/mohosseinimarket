"use client";

import ButtonLink from "@/components/button-link";
import { Card, CardContent } from "@/components/ui/card";
import { ProductProps } from "@/types/products-t";
import { toSlug } from "@/utils/to-slug";
import { GlobeOffIcon } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function SearchResult({
  products,
}: {
  products: ProductProps[];
}) {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const searched_products = products.filter((product) =>
    product.name.includes(query ?? ""),
  );

  if (!query) return null;

  return (
    <Card className="absolute left-1/2 -translate-x-1/2 w-full mt-2">
      <CardContent className="flex flex-col">
        {searched_products.length === 0 ? (
          <div className="flex flex-col items-center gap-2">
            <GlobeOffIcon className="text-muted-foreground size-16" />
            <h1 className="font-bold text-sm text-center">
              محصول مورد نظر وجود ندارد.
            </h1>
          </div>
        ) : (
          searched_products
            .map((sp) => (
              <ButtonLink
                key={sp._id}
                href={`/market/product/${sp._id}/${toSlug(sp.name)}`}
                buttonClassName="w-auto h-auto p-2"
                text={
                  <div className="w-full flex items-center gap-2">
                    <Image
                      src={
                        !sp.image || sp.image?.trim() === ""
                          ? "/placeholder.svg"
                          : sp.image
                      }
                      alt={sp.name}
                      className="bg-accent rounded"
                      width={40}
                      height={40}
                    />
                    <div className="">
                      <h1 className="truncate w-32 font-semibold">{sp.name}</h1>
                      <p className="truncate w-32 text-xs text-muted-foreground">
                        {sp.description}
                      </p>
                    </div>
                  </div>
                }
                variant={"ghost"}
              />
            ))
            .slice(0, 3)
        )}{" "}
      </CardContent>
    </Card>
  );
}
