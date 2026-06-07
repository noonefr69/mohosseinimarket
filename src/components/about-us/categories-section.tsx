import datas from "@/db.json";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import ButtonLink from "../button-link";

export default function CategoriesSection() {
  return (
    <div className="mt-7">
      <h1 className="font-bold text-3xl">چه چیز هایی می فروشیم؟</h1>
      <ul className="relative flex mt-4 items-center justify-between gap-4 overflow-x-hidden p-1">
        {datas.categories.map((item) => (
          <li key={item._id}>
            <Link href={`/market?category=${item.slug}`}>
              <Card className="w-44 h-auto hover:ring-2 hover:ring-primary duration-150">
                <CardContent className="text-center">
                  <span>{item.icon}</span>
                  <h2>{item.title}</h2>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
        <li className="bg-linear-to-r from-background to-transparent flex items-center justify-center left-0 top-1/2 -translate-y-1/2 absolute h-full w-24">
          <ButtonLink text={"مشاهده همه"} href={`/market`} variant={"link"} />
        </li>
      </ul>
    </div>
  );
}
