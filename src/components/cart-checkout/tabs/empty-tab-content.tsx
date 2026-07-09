import ButtonLink from "@/components/button-link";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import type { LucideIcon } from "lucide-react";

interface EmptyTabContentProps {
  icon: LucideIcon;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

export default function EmptyTabContent({
  icon: Icon,
  title,
  description,
  linkText,
  linkHref,
}: EmptyTabContentProps) {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia className="size-20" variant="icon">
          <Icon className="size-10" />
        </EmptyMedia>
        <EmptyTitle className="text-2xl font-semibold">{title}</EmptyTitle>
        <EmptyDescription>{description}</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <ButtonLink href={linkHref} text={linkText} variant="secondary" />
      </EmptyContent>
    </Empty>
  );
}
