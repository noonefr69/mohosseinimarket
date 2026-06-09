"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../../ui/input-group";
import { Button } from "../../ui/button";
import { SearchIcon } from "lucide-react";

export default function HeaderInputs({
  groupClassName,
}: {
  groupClassName?: string;
}) {
  return (
    <InputGroup dir="ltr" className={`${groupClassName}`}>
      <InputGroupInput className="" dir="rtl" placeholder="جست و جو..." />
      <InputGroupAddon align={"inline-end"}>
        <Button size={"icon-sm"} variant={"ghost"}>
          <SearchIcon />
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
}
