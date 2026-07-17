"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { LogOutIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import { useTransition } from "react";
import { toast } from "sonner";

export default function SignOutDropdown() {
  const [isPending, startTransition] = useTransition();

  function handleSignOut() {
    startTransition(async () => {
      try {
        await signOut();
        toast.success("با موفقیت از حساب کاربری خود خارج شدید");
      } catch (err) {
        console.error(err);
        toast.error("مشکلی پیش آمده استو لطفا دوباره امتحان کنید.");
      }
    });
  }

  return (
    <Button
      onClick={handleSignOut}
      disabled={isPending}
      type="submit"
      variant={"destructive"}
      className="w-full py-6 text-lg flex flex-row items-center justify-baseline"
      style={isPending ? { justifyContent: "center" } : undefined}
    >
      {isPending ? (
        <Spinner className="size-7" />
      ) : (
        <>
          <LogOutIcon className="size-7" /> خروج از حساب کاربری
        </>
      )}
    </Button>
  );
}
