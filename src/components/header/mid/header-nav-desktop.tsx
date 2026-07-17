import { Button } from "@/components/ui/button";
import { Separator } from "../../ui/separator";
import Link from "next/link";
import { pages_links } from "@/consts/links";
import { auth } from "@/auth";
import ShoppingCartSheet from "@/components/header/mid/shopping-cart-sheet";
import UserDropDown from "./user-dropdown";

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
        <UserDropDown phone={session.user.phone} />
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
