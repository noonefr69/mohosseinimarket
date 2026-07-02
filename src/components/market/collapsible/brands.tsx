"use client";

import { ProductProps } from "@/types/products-t";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";
import ButtonLink from "@/components/button-link";
import { Separator } from "@/components/ui/separator";

interface BrandsProps {
  products: ProductProps[];
}

export default function Brands({ products }: BrandsProps) {
  const searchParams = useSearchParams();
  const unique_brands = [...new Set(products.map((product) => product.brand))];
  const [input_val, set_input_val] = useState("");
  const filter_unique_brands = unique_brands.filter((ub) =>
    ub?.toLocaleLowerCase().includes(input_val),
  );
  return (
    <Collapsible className="group">
      <CollapsibleTrigger asChild>
        <Button
          className="flex items-center justify-between w-full"
          size={"lg"}
          variant={"ghost"}
        >
          {"برند"}
          <ChevronLeftIcon className="transition-transform group-data-[state=open]:-rotate-90" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="max-h-64 overflow-scroll px-1">
        <Input
          className="mt-1 mb-3 sticky top-2 bg-background shadow-sm"
          placeholder="جست و جوی برند"
          value={input_val}
          onChange={(e) => set_input_val(e.target.value)}
        />

        {filter_unique_brands.map((oub, i) => {
          const params = new URLSearchParams(searchParams.toString());
          params.set("brand", oub || "");
          return (
            <React.Fragment key={oub}>
              <ButtonLink
                href={`?${params.toString()}`}
                text={oub}
                variant={"ghost"}
                linkClassName="flex justify-start w-full pr-10 py-4"
              />
              {i < unique_brands.length - 1 && <Separator />}
            </React.Fragment>
          );
        })}
      </CollapsibleContent>
    </Collapsible>
  );
}
