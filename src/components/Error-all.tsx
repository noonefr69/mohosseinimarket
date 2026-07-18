"use client";

import { AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import ButtonLink from "./button-link";
import { useRouter } from "next/navigation";

export function ErrorAll({ error_message }: { error_message: string }) {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <AlertCircle className="size-18 text-muted-foreground" />
      <p className="font-semibold text-lg">{error_message}</p>
      <div className="flex items-center gap-2">
        <Button onClick={() => router.refresh()}>رفرش</Button>
        <ButtonLink href="/" text={"برگشت به خانه"} variant={"secondary"} />
      </div>
    </div>
  );
}
