import ButtonLink from "@/components/button-link";

export const sorted = [
  { label: "مرتبط‌ترین", href: "" },
  { label: "ارزان‌ترین", href: "cheap" },
  { label: "گران‌ترین", href: "expensive" },
];

export default async function WishlistsFilters() {
  return (
    <div>
      {sorted.map((sorte, i) => (
        <ButtonLink
          key={i}
          text={sorte.label}
          href={`?sorted=${sorte.href}`}
          variant={"link"}
          buttonClassName="text-muted-forground no-underline"
        />
      ))}
    </div>
  );
}
