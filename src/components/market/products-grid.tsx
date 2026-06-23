"use client";

import { ProductProps } from "@/types/products-t";
import ProductCart from "../product-card";
import { Separator } from "../ui/separator";

export default function ProductsGrid({
  products,
}: {
  products: ProductProps[];
}) {
  return (
    <>
      <Separator className="mb-4 mt-2" />
      <ul className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {products.map((p) => (
          <ProductCart item={p} key={p._id} />
        ))}
      </ul>
    </>
  );
}
