export interface ProductProps {
  _id: string;
  name: string;
  slug: string;
  category_slug: string;
  subcategory_slug?: string;
  unit?: string;
  weight_or_volume?: number;
  price: number;
  discount_percent: number;
  final_price: number;
  stock: number;
  is_active: boolean;
  images: string[];
  tags: string[];
  description?: string;
  brand_en?: string;
  brand_fa?: string;
}

export type GetProductsResult =
  | { success: true; data: ProductProps[] }
  | { success: false; error: string };
