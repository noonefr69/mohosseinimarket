import { auth } from "@/auth";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { toPersianDigits } from "@/utils/to-persian-digits";
import { profile_links } from "@/consts/user-links";
import React from "react";
import ButtonLink from "../button-link";
import { HomeIcon, UserIcon } from "lucide-react";
import { Separator } from "../ui/separator";
import SignOutDropdown from "../header/mid/user-dropdown/sign-out-dropdown";

export default async function ProfNavigation() {
  const session = await auth();
  return (
    <Card className="col-span-12 order-2 lg:order-1 lg:col-span-3">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          {toPersianDigits(session?.user.phone ?? "")}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col">
        {profile_links.map((link) => (
          <React.Fragment key={link.href}>
            <ButtonLink
              href={link.href}
              text={
                <div className="flex items-center  gap-2 w-full text-lg">
                  {<link.icon className="size-7" />} {link.label}
                </div>
              }
              buttonClassName="py-6"
              variant={"ghost"}
            />
            <Separator className="my-1" />
          </React.Fragment>
        ))}
        <SignOutDropdown />
      </CardContent>
    </Card>
  );
}
