"use client";

import { SearchIcon, XIcon } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useRef, useTransition } from "react";
import { Spinner } from "@/components/ui/spinner";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";

export default function Search({
  groupClassName,
}: {
  groupClassName?: string;
}) {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const path_name = usePathname();
  const { replace } = useRouter();

  const [is_pending, startTransition] = useTransition();

  function handleSearch(term: string) {
    startTransition(() => {
      const params = new URLSearchParams(searchParams);
      if (term) {
        params.set("query", term);
      } else {
        params.delete("query");
      }
      replace(`${path_name}?${params.toString()}`);
    });
  }
  const input_ref = useRef<null | HTMLInputElement>(null);

  return (
    <InputGroup dir="ltr" className={`${groupClassName} shrink w-auto`}>
      <InputGroupInput
        ref={input_ref}
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
        dir="rtl"
        placeholder="جست و جو..."
      />
      <InputGroupAddon align={"inline-end"}>
        <Button
          onClick={() => {
            if (input_ref.current) {
              input_ref.current.value = "";
              handleSearch("");
            }
          }}
          size={"icon-sm"}
          variant={"ghost"}
        >
          {is_pending ? <Spinner /> : query ? <XIcon /> : <SearchIcon />}
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
}
