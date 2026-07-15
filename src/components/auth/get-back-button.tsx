"use client"

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function GetBackButton() {
  const router = useRouter()

  return (
    <Button
      size="icon-lg"
      variant={"ghost"}
      className="font-semibold text-lg hover:no-underline flex items-center justify-center scale-125"
      onClick={() => router.back()}
    >
      ←
    </Button>
  );
}
