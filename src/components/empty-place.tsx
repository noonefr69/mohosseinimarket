import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

interface EmptyPlaceProps {
  icon: React.ReactNode;
  head: string;
  desc: string;
  buttons: React.ReactNode;
}

export default function EmptyPlace({
  icon,
  head,
  desc,
  buttons,
}: EmptyPlaceProps) {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia className="size-16" variant="icon">
          {icon}
        </EmptyMedia>
        <EmptyTitle className="lg:text-xl text-lg">{head}</EmptyTitle>
        <EmptyDescription>{desc}</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>{buttons}</EmptyContent>
    </Empty>
  );
}
