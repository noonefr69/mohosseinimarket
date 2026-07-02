"use client";

import ButtonLink from "@/components/button-link";
import { CategoryProps } from "@/types/category-t";
import { toSlug } from "@/utils/to-slug";
import { usePathname } from "next/navigation";

export default function Categories({
  categories,
}: {
  categories: CategoryProps[];
}) {
  const pathName = usePathname();

  return (
    <ul className="flex flex-col items-start">
      {categories.map((item) => (
        <li key={item._id}>
          <ButtonLink
            text={item.name}
            href={`/market/filter/${item._id}/${toSlug(item.name)}`}
            variant={"link"}
            linkClassName={
              decodeURIComponent(pathName) ===
              `/market/filter/${item._id}/${toSlug(item.name)}`
                ? "text-primary"
                : ""
            }
            buttonClassName="px-0 text-right w-full justify-start text-lg text-muted-foreground active:text-primary hover:text-primary hover:no-underline"
          />
        </li>
      ))}
    </ul>
  );
}
