import { sorted_values } from "@/consts/sort";
import ButtonLink from "../../button-link";
import { useSearchParams } from "next/navigation";

export default function SortingPanel() {
  const searchParams = useSearchParams();

  return (
    <div>
      {sorted_values.map((s) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("sorted", s.name_en);
        return (
          <ButtonLink
            key={s._id}
            href={`?${params.toString()}`}
            text={s.name_fa}
            variant={"link"}
            buttonClassName={`text-muted-forground ${(searchParams.get("sorted") ?? "related") === s.name_en ? "opacity-100" : "opacity-50 hover:opacity-100"}`}
          />
        );
      })}
    </div>
  );
}
