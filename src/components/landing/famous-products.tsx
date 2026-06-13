"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import datas from "../../db.json";
import ProductCart from "../product-card";

export default function FamousProducts() {
  return (
    <div className="mt-7 ">
      <h1 className="md:text-2xl font-bold">محبوب ترین هفته</h1>

      <div className="mt-4 relative">
        <div className="flex items-center justify-end px-2 h-full w-20 md:w-24 bg-linear-to-r from-background to-transparent absolute left-0 z-20">
          <Button asChild variant={"outline"} size={"icon-lg"}>
            <Link href={`/market`}>&lArr;</Link>
          </Button>
        </div>
        {/* <ul className="flex items-center overflow-x-hidden p-1 gap-4">
          {datas.products.slice(0, 8).map((item) => (
            <ProductCart
              //   cardClassName="w-40"
              _id={item._id}
              category_title_fa={item.category_title_fa}
              name={item.name}
              price={item.price}
              key={item._id}
            />
          ))}
        </ul> */}
      </div>
    </div>
  );
}
