export interface ProductProps {
  _id: string;
  name: string;
  slug: string;
  brand?: string;
  category_slug: string;
  category_slug_fa: string;
  subcategory_slug?: string;
  unit?: string;
  weight_or_volume?: number;
  price: number;
  discount_percent: number;
  stock: number;
  is_active: boolean;
  images: string[];
  tags: string[];
  description?: string;
}

export type GetProductsResult =
  | { success: true; data: ProductProps[] }
  | { success: false; error: string };
