import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ButtonLink from "@/components/button-link";
import { toPersianDigits } from "@/utils/to-persian-digits";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, User2Icon } from "lucide-react";
import { user_links } from "@/consts/user-links";
import SignOutDropdown from "./user-dropdown/sign-out-dropdown";

export default function UserDropDown({ phone }: { phone: string }) {
  return (
    <DropdownMenu dir="ltr">
      <DropdownMenuTrigger asChild>
        <Button className="" size={"icon-lg"} variant="ghost">
          <User2Icon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <DropdownMenuGroup dir="rtl">
          <DropdownMenuLabel>جزئیات</DropdownMenuLabel>
          <DropdownMenuItem asChild className="">
            <ButtonLink
              href="/profile"
              text={
                <>
                  {toPersianDigits(phone)}
                  <ChevronLeftIcon className="size-6" />
                </>
              }
              variant={"ghost"}
              linkClassName="text-xl"
              buttonClassName="w-full text-start flex-row flex items-center justify-between py-8"
            />
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup className="font-semibold" dir="rtl">
          <DropdownMenuSeparator />
          <DropdownMenuGroup className="flex flex-col">
            {user_links.map((link) => (
              <React.Fragment key={link.href}>
                <DropdownMenuItem asChild>
                  <ButtonLink
                    href={link.href}
                    text={
                      <div className="flex items-center gap-2 w-full text-lg">
                        {<link.icon className="size-7" />} {link.label}
                      </div>
                    }
                    buttonClassName="py-6"
                    variant={"ghost"}
                  />
                </DropdownMenuItem>
                <DropdownMenuSeparator />
              </React.Fragment>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuGroup dir="rtl">
            <DropdownMenuItem asChild variant="destructive" className="p-0">
              <SignOutDropdown />
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
