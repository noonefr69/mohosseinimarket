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
import { toPersianDigits } from "@/utils/to-persian-digits";
import datas from "@/db.json";

export default function Categories() {
  return (
    <ul className="flex items-center flex-wrap">
      {datas.categories.map((link, i) => (
        <li key={i}>
          <Button asChild variant={"ghost"} className="px-2">
            <Link className="text-[14px]" href={`/market/${link.slug}`}>
              {/* {<link.icon />} */}
              {link.title}
            </Link>
          </Button>
        </li>
      ))}
      {/* <li>
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
      </li> */}
    </ul>
  );
}
