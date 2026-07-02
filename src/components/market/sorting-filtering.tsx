"use client";

import { sorted_values } from "@/consts/sort";
import { CategoryProps, ProductProps } from "@/types/products-t";
import { useSearchParams } from "next/navigation";
import ButtonLink from "../button-link";
import FilterSheet from "./sheets/filter-sheet";
import SortSheet from "./sheets/sort-sheet";
import { toPersianDigits } from "@/utils/to-persian-digits";

export default function SortingFiltering({
  categories,
  products,
}: {
  categories: CategoryProps[];
  products: ProductProps[];
}) {
  const searchParams = useSearchParams();

  return (
    <div className="flex items-center justify-between">
      <div className="lg:flex hidden">
        {sorted_values.map((s) => {
          const params = new URLSearchParams(searchParams.toString());
          params.set("sorted", s.name_en);
          return (
            <ButtonLink
              key={s._id}
              href={`?${params.toString()}`}
              text={s.name_fa}
              variant={"link"}
              buttonClassName={`text-muted-forground ${(searchParams.get("sorted") ?? "related") === s.name_en ? "opacity-100" : "opacity-50 hover:opacity-100"}`}
            />
          );
        })}
      </div>

      <div className="lg:hidden flex">
        <FilterSheet categories={categories} products={products} />
        <SortSheet />
      </div>

      <span>{toPersianDigits(products.length)} کالا</span>
    </div>
  );
}
