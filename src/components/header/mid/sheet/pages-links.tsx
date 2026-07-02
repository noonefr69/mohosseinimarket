"use client";

import ButtonLink from "@/components/button-link";
import { pages_links } from "@/consts/links";
import { usePathname } from "next/navigation";

export default function PagesLinks() {
  const pathName = usePathname();

  return (
    <div className="flex flex-col items-start">
      {pages_links.map((item, i) => (
        <ButtonLink
          key={i}
          text={item.title}
          href={item.href}
          variant={"link"}
          linkClassName={pathName === item.href ? "text-primary" : ""}
          buttonClassName="px-0 text-right w-full justify-start text-lg text-muted-foreground active:text-primary hover:text-primary hover:no-underline"
        />
      ))}
    </div>
  );
}
