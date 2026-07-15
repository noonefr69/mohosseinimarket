import ButtonLink from "../button-link";
import { categories } from "@/consts/categories";
import { toSlug } from "@/utils/to-slug";
import Image from "next/image";

export default function CategoriesSection() {
  return (
    <div className="mt-7">
      <h1 className="font-bold text-3xl">چه چیز هایی می فروشیم؟</h1>
      <ul className="relative flex mt-4 items-center justify-between gap-4 overflow-x-hidden p-1">
        {categories.map((link) => (
          <li key={link._id.$oid} className="flex flex-col items-center gap-2">
            <ButtonLink
              text={
                <div className="flex flex-col items-center gap-2">
                  <Image
                    src={link.icon}
                    alt={link.name_fa}
                    width={20}
                    height={20}
                    className="bg-accent"
                  />
                  <span>{link.name_fa}</span>
                </div>
              }
              href={`/market/filter/${link._id.$oid}/${toSlug(link.name_fa)}`}
              variant={"ghost"}
              buttonClassName="ring-2 bg-card w-44 py-10 ring-primary/60 hover:ring-primary"
            />
          </li>
        ))}
        <li className="bg-linear-to-r from-background to-transparent flex items-center justify-center left-0 top-1/2 -translate-y-1/2 absolute   h-full w-24">
          <ButtonLink
            text={"مشاهده همه"}
            href={`/market`}
            variant={"default"}
            linkClassName="h-full "
          />
        </li>
      </ul>
    </div>
  );
}
