"use client";

import { profile_links } from "@/consts/user-links";
import React from "react";
import ButtonLink from "../button-link";
import { Separator } from "../ui/separator";
import { usePathname } from "next/navigation";

export default function ProfileLinks() {
  const path_name = usePathname();
  return (
    <>
      {profile_links.map((link) => (
        <React.Fragment key={link.href}>
          <ButtonLink
            href={link.href}
            text={
              <div className="flex items-center  gap-2 w-full text-lg relative">
                {<link.icon className="size-7" />} {link.label}
              </div>
            }
            buttonClassName={`py-6 ${path_name === link.href ? "bg-accent font-semibold" : ""} `}
            variant={"ghost"}
          />
          <Separator className="my-1" />
        </React.Fragment>
      ))}
    </>
  );
}
