import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { toPersianDigits } from "@/lib/to-persian-digits";
import { footerLinkFoot, footerLinks, social_media } from "@/consts/links";
import ButtonLink from "../button-link";

export default function FooterUi() {
  return (
    <footer className="bg-accent/40 border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col gap-4">
            <Link href="/" className="font-bold text-xl">
              سوپرمارکت حسینی
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
                  className="w-9 h-9 rounded-lg bg-background border flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Image src={s.icon} alt={s.title} width={18} height={18} />
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
                      linkClassName="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl bg-chart-1/10 border border-chart-1/20 p-6 flex flex-col md:flex-row items-center gap-4 justify-between">
          <div>
            <p className="font-semibold">تحویل سفارشات در سریعترین زمان</p>
            <p className="text-sm text-muted-foreground mt-1">
              همه روزه از {toPersianDigits("09:00")} صبح تا{" "}
              {toPersianDigits("17:00")} شب — تبریز
            </p>
          </div>
          <Button asChild>
            <Link href="/market">همین الان خرید کن</Link>
          </Button>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© ۱۴۰۵ سوپرمارکت حسینی — تمامی حقوق محفوظ است</p>
          <ul className="flex items-center gap-4">
            {footerLinkFoot.map((item, i) => (
              <li key={i}>
                <ButtonLink
                  variant={"link"}
                  href={item.href}
                  text={item.label}
                  linkClassName="hover:text-foreground transition-colors"
                  buttonClassName="text-muted-foreground p-0"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
