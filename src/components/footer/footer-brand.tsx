import ButtonLink from "../button-link";
import { footerLinks, social_media } from "@/consts/links";
import Link from "next/link";
import Image from "next/image";

export default function FooterBrand() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      <div className="flex flex-col gap-4">
        <Link href="/" className="font-bold text-xl">
          سوپرمارکت مبلغ حسینی
        </Link>
        <p className="text-muted-foreground text-sm leading-7">
          بیش از ۲۵ سال تجربه در ارائه بهترین مواد غذایی و کالاهای روزمره با
          تحویل درب منزل در سراسر تبریز.
        </p>
        <div className="flex items-center gap-3 mt-2">
          {social_media.map((s, i) => (
            <Link
              key={i}
              href={s.href}
              target="_blank"
              //   rel="noopener noreferrer"
              aria-label={s.title}
              className="group w-9 h-9 rounded-lg bg-background border flex items-center justify-center hover:bg-accent"
            >
              <Image
                src={s.icon}
                alt={s.title}
                width={18}
                height={18}
                className="dark:invert opacity-75 group-hover:opacity-100 duration-150"
              />
            </Link>
          ))}
        </div>
      </div>

      {Object.values(footerLinks).map((section) => (
        <div key={section.title} className="flex flex-col gap-3">
          <h3 className="font-semibold text-sm">{section.title}</h3>
          <ul className="flex flex-col gap-0">
            {section.links.map((link) => (
              <li key={link.label}>
                <ButtonLink
                  variant={"link"}
                  href={link.href}
                  text={link.label}
                  buttonClassName="p-0 text-muted-foreground"
                  linkClassName="text-sm text-muted-foreground hover:text-foreground"
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
