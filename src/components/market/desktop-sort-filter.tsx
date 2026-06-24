import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { sorted_values } from "@/consts/sort";
import ButtonLink from "../button-link";
import { toPersianDigits } from "@/utils/to-persian-digits";

export default function DesktopSortFilter({
  products_length,
}: {
  products_length: number;
}) {
  return (
    <div className="mb-2 hidden lg:flex items-center justify-between">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="flex items-center justify-between gap-2"
            variant="outline"
          >
            مرتب سازی
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            {sorted_values.map((s) => (
              <DropdownMenuItem asChild key={s._id}>
                <ButtonLink
                  href={`?sorted=${s.name_en}`}
                  text={s.name_fa}
                  variant={"ghost"}
                  buttonClassName="w-full text-left"
                  linkClassName="text-right"
                />
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <span>{toPersianDigits(products_length)} کالا</span>
    </div>
  );
}
