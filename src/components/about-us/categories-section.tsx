import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import ButtonLink from "../button-link";
import { categories } from "@/consts/categories";
import { Button } from "../ui/button";
import Image from "next/image";

export default function CategoriesSection() {
  return (
    <div className="mt-7">
      <h1 className="font-bold text-3xl">چه چیز هایی می فروشیم؟</h1>
      <ul className="relative flex mt-4 items-center justify-between gap-4 overflow-x-hidden p-1">
        {categories.map((link) => (
          <li key={link._id.$oid}>
            <ButtonLink
              text={link.name_fa}
              href={`/market/${link.slug}`}
              variant={"link"}
              buttonClassName="ring-2 bg-card w-44"
            />
          </li>
        ))}
        <li className="bg-linear-to-r from-background to-transparent flex items-center justify-center left-0 top-1/2 -translate-y-1/2 absolute h-full w-24">
          <ButtonLink text={"مشاهده همه"} href={`/market`} variant={"link"} />
        </li>
      </ul>
    </div>
  );
}
