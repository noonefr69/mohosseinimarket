import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ButtonLink({
  text,
  href,
  linkClassName,
  buttonClassName,
  variant,
  size,
}: {
  text: string | number;
  href: string;
  linkClassName?: string;
  buttonClassName?: string;
  size?:
    | "default"
    | "xs"
    | "sm"
    | "lg"
    | "icon"
    | "icon-xs"
    | "icon-sm"
    | "icon-lg"
    | null
    | undefined;
  variant:
    | "link"
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "destructive"
    | null
    | undefined;
}) {
  return (
    <Button asChild size={size} variant={variant} className={buttonClassName}>
      <Link className={linkClassName} href={href}>
        {text}
      </Link>
    </Button>
  );
}
