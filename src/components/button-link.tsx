import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ButtonLink({
  text,
  href,
  linkClassName,
  buttonClassName,
  variant,
}: {
  text: string | number;
  href: string;
  linkClassName?: string;
  buttonClassName?: string;
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
    <Button asChild variant={variant} className={buttonClassName}>
      <Link className={linkClassName} href={href}>
        {text}
      </Link>
    </Button>
  );
}
