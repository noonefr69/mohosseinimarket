import { Button } from "@/components/ui/button";
import { categories } from "@/consts/categories";
import Link from "next/link";

export default async function Categories() {
  return (
    <ul className="flex items-center flex-wrap">
      {categories.map((link) => (
        <li key={link._id.$oid}>
          <Button asChild variant={"ghost"} className="px-2">
            <Link className="text-[14px]" href={`/market/${link.slug}`}>
              {link.name_fa}
            </Link>
          </Button>
        </li>
      ))}
    </ul>
  );
}
