import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { MapPinIcon, PhoneCallIcon } from "lucide-react";
import { toPersianDigits } from "@/lib/to-persian-digits";
import datas from "@/db.json";

export default function FootHeader() {
  return (
    <div className="pt-28 bg-primary-foreground lg:block hidden">
      <div className="max-w-7xl mx-auto px-2 pb-2 flex items-center justify-between">
        <ul className="flex items-center">
          {datas.categories.slice(0, 4).map((link, i) => (
            <li key={i}>
              <Button asChild variant={"ghost"} className="px-2">
                <Link
                  className="text-[14px]"
                  href={`/market?category=${link.slug}`}
                >
                  {/* {<link.icon />} */}
                  {link.title}
                </Link>
              </Button>
            </li>
          ))}
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="focus-visible:outline-none">
                  بیشتر...
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-fit">
                <DropdownMenuGroup>
                  {datas.categories.slice(4).map((item, i) => (
                    <DropdownMenuItem key={i} className="p-0">
                      <Link
                        className="p-1 w-full"
                        href={`/market?category=${item.slug}`}
                      >
                        {item.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 border flex items-center justify-center rounded-full">
              <MapPinIcon className="size-6" />
            </div>
            <div>
              <h1 className="font-semibold text-sm">آدرس: </h1>
              <span className="text-sm">
                تبریز, چهاراه آبرسان, رو به روی مدرسه پناهی
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 border flex items-center justify-center rounded-full">
              <PhoneCallIcon className="size-6" />
            </div>
            <div>
              <h1 className="font-semibold text-sm">تلفن: </h1>
              <span dir="ltr" className="text-sm">
                {toPersianDigits("041 33343989")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
