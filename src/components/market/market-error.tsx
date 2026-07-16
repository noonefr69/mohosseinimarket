"use client";

import { BugIcon } from "lucide-react";
import { Button } from "../ui/button";
import ButtonLink from "../button-link";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "../ui/card";

export default function MarketError({ error }: { error: string }) {
  const router = useRouter();

  return (
    <Card className="mt-7 w-fit mx-auto">
      <CardContent className="flex flex-col justify-center items-center gap-4">
        <BugIcon className="size-28" />
        <h1 className="text-lg font-semibold">{error}</h1>
        <div className="flex items-center gap-2">
          <Button onClick={() => router.refresh()}>رفرش</Button>
          <ButtonLink
            href="/contact-us"
            text={"پشتیبانی"}
            variant={"secondary"}
          />
        </div>
      </CardContent>
    </Card>
  );
}
