import ButtonLink from "@/components/button-link";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import { CartItemRowProps } from "@/types/products-t";
import { commaThree } from "@/utils/comma-three";
import { toSlug } from "@/utils/to-slug";
import { MinusIcon, PlusIcon } from "lucide-react";
import Image from "next/image";

export default function CartItemRow({ item }: CartItemRowProps) {
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);

  return (
    <div className="flex gap-4 hover:bg-accent/70 duration-150 p-2 rounded">
      <div className="flex flex-col items-center h-fit gap-3">
        <ButtonLink
          text={
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              width={140}
              height={170}
            />
          }
          href={`/market/product/${item._id}/${toSlug(item.name)}`}
          variant="ghost"
          linkClassName="h-full"
        />
        <div className="flex items-center gap-2 ring rounded overflow-hidden">
          <Button
            onClick={() =>
              addItem({
                _id: item._id,
                name: item.name,
                price: item.price,
              })
            }
            className="hover:opacity-100 lg:opacity-60 text-accent-foreground rounded ring-0 border-0 outline-0 bg-transparent"
            variant="link"
            size="icon"
          >
            <PlusIcon />
          </Button>
          <span className="text-lg">{commaThree(item.quantity)}</span>
          <Button
            onClick={() => removeItem(item._id)}
            className="hover:opacity-100 lg:opacity-60 text-accent-foreground rounded ring-0 border-0 outline-0 bg-transparent"
            variant="link"
            size="icon"
          >
            <MinusIcon />
          </Button>
        </div>
      </div>
      <div className="flex flex-col h-full justify-between">
        <h1 className="text-lg font-bold">{item.name}</h1>
        {item.description && (
          <h2 className="text-muted-foreground">{item.description}</h2>
        )}
        {item.brand && <h3 className="text-muted-foreground">{item.brand}</h3>}
        {item.weight_or_volume != null && (
          <h4 className="text-muted-foreground">
            {commaThree(item.weight_or_volume)} {item.unit}
          </h4>
        )}
        <h5 className="font-semibold mt-6">
          {commaThree(item.price * item.quantity)} تومان
        </h5>
      </div>
    </div>
  );
}
