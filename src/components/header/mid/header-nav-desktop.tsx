import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "../../ui/separator";
import { pages_links } from "@/consts/links";

export default function HeaderNavDesktop() {
  return (
    <ul className="hidden md:flex items-center">
      {pages_links.map((link, i) => (
        <li key={i}>
          <Button className="" asChild variant={"ghost"} size={"lg"}>
            <Link href={link.href}>{link.title}</Link>
          </Button>
        </li>
      ))}
      <Separator orientation="vertical" className="mx-2 lg:mx-4" />
      <li>
        <Button asChild variant={"default"} size={"default"}>
          <Link href={`/sign-in`}>
            {/* <User2 /> */}
            ثبت نام | ورود
          </Link>
        </Button>
      </li>
    </ul>
  );
}
