import { ProductProps } from "@/types/products-t";
import WishlistCard from "./wishlist-card";

interface WishlistsGridProps {
  sorted: string;
  wishlists: ProductProps[];
}

export default function WishlistsGrid({
  sorted,
  wishlists,
}: WishlistsGridProps) {
  const sorted_wishlists = [...wishlists];

  if (sorted === "cheap") {
    sorted_wishlists.sort((a, b) => {
      return a.price - b.price;
    });
  } else if (sorted === "expensive") {
    sorted_wishlists.sort((a, b) => {
      return b.price - a.price;
    });
  }

  return (
    <>
      {sorted_wishlists.map((wishlist) => (
        <WishlistCard wishlist={wishlist} key={wishlist._id} />
      ))}
    </>
  );
}
