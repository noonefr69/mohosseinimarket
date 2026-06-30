"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { CategoryProps } from "@/types/products-t";

export default function BreadcrumbComponent({
  product_name,
  product_category,
}: {
  product_name: string;
  product_category: CategoryProps;
}) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">خانه</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="rotate-180" />
        <BreadcrumbItem>
          <BreadcrumbLink href="/market">سوپرمارکت</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="rotate-180" />
        <BreadcrumbItem>
          <BreadcrumbLink
            href={`/market/filter/${product_category._id}/${product_category.name}`}
          >
            {product_category.name}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="rotate-180" />
        <BreadcrumbItem>
          <BreadcrumbPage className="font-semibold">
            {product_name}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
