"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function GetBackButton({
  className,
  variant,
  size,
}: {
  className?: string;
  variant?:
    | "link"
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "destructive"
    | null
    | undefined;
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
}) {
  const router = useRouter();

  return (
    <Button
      size={size}
      variant={variant}
      className={`font-semibold text-lg hover:no-underline flex items-center justify-center scale-125 ${className} `}
      onClick={() => router.back()}
    >
      ←
    </Button>
  );
}
