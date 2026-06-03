import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { lil_links, social_media } from "@/consts/links";

export default function HeadHeader() {
  return (
    <div className="bg-chart-1 md:block hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between ">
          <ul className="flex items-center gap-4 px-4 py-1">
            {lil_links.map((link, i) => (
              <li key={i}>
                <Button asChild variant={"link"} size={"sm"} className="px-0">
                  <Link
                    className="text-white/80 hover:text-white"
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
          <ul className="flex items-center">
            {social_media.map((link, i) => (
              <li key={i}>
                <Button
                  className="brightness-0 invert opacity-80 hover:opacity-100" // makes it white
                  asChild
                  variant={"link"}
                  size={"sm"}
                >
                  <Link href={link.href}>
                    <Image
                      src={link.icon}
                      alt={link.title}
                      width={14}
                      height={14}
                    />
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
