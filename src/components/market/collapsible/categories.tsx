import { CategoryProps } from "@/types/products-t";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import ButtonLink from "@/components/button-link";
import { Separator } from "@/components/ui/separator";
import { toSlug } from "@/utils/to-slug";

interface CategoriesProps {
  categories: CategoryProps[];
}

export default function Categories({ categories }: CategoriesProps) {
  return (
    <Collapsible className="group">
      <CollapsibleTrigger asChild>
        <Button
          className="flex items-center justify-between w-full"
          size={"lg"}
          variant={"ghost"}
        >
          {"دسته بندی"}
          <ChevronLeftIcon className="transition-transform group-data-[state=open]:-rotate-90" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="max-h-64 overflow-scroll px-1">
        {categories.map((category, i) => {
          return (
            <React.Fragment key={category._id}>
              <ButtonLink
                href={`/market/filter/${category._id}/${toSlug(category.name)}`}
                text={category.name}
                variant={"ghost"}
                linkClassName="flex justify-start w-full pr-10 py-4"
              />
              {i < categories.length - 1 && <Separator />}
            </React.Fragment>
          );
        })}
      </CollapsibleContent>
    </Collapsible>
  );
}
