import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "../../ui/separator";
import { pages_links } from "@/consts/links";
import { auth } from "@/auth";
import { User2 } from "lucide-react";
import ShoppingCartSheet from "@/components/header/mid/shopping-cart-sheet";

export default async function HeaderNavDesktop() {
  const session = await auth();

  return (
    <ul className="hidden md:flex items-center gap-2">
      {pages_links.map((link, i) => (
        <li key={i}>
          <Button className="" asChild variant={"ghost"} size={"lg"}>
            <Link href={link.href}>{link.title}</Link>
          </Button>
        </li>
      ))}
      <Separator orientation="vertical" className="mx-2" />
      {session?.user ? (
        <li>
          <Button asChild variant={"ghost"} size={"icon-lg"}>
            <Link href={`/profile`}>
              <User2 />
            </Link>
          </Button>
        </li>
      ) : (
        <li>
          <Button asChild variant={"default"} size={"default"}>
            <Link href={`/sign-in`}>ثبت نام | ورود</Link>
          </Button>
        </li>
      )}
      <li>
        <ShoppingCartSheet />
      </li>
    </ul>
  );
}
