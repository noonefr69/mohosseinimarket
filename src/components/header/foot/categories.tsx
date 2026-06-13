import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getCategories } from "@/actions/category";

export default async function Categories() {
  const result = await getCategories();

  if (!result.success) return <div>fucked</div>;

  return (
    <ul className="flex items-center flex-wrap">
      {result?.data?.map((link) => (
        <li key={link._id}>
          <Button asChild variant={"ghost"} className="px-2">
            <Link className="text-[14px]" href={`/market/${link.slug}`}>
              {/* {<link.icon />} */}
              {link.name_fa}
            </Link>
          </Button>
        </li>
      ))}
    </ul>
  );
}
