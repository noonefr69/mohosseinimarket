"use client";

import { CheckCheckIcon, ShareIcon } from "lucide-react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { Spinner } from "../ui/spinner";

export default function CopyUrl() {
  const pathName = usePathname();
  const NEXT_URL = process.env.NEXT_PUBLIC_NEXT_URL;
  const [isCopied, setIsCopied] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleCopyUrl() {
    startTransition(async () => {
      try {
        await navigator.clipboard.writeText(
          `${NEXT_URL}${decodeURIComponent(pathName)}`,
        );
        toast.success("آدرس صفحه کپی شد.");
        setIsCopied(true);
      } catch (err) {
        console.error(err);
        toast.error("متاسفانه مشکلی پیش آمده است و نمیتوان آدرس را کپی کرد.");
      }
    });
  }

  return (
    <Button
      onClick={handleCopyUrl}
      size={"icon"}
      variant={"ghost"}
      className="text-muted-foreground"
    >
      {isPending ? <Spinner /> : isCopied ? <CheckCheckIcon /> : <ShareIcon />}
    </Button>
  );
}
