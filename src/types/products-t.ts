export interface ProductProps {
  _id: string;
  name: string;
  description: string;
  price: number;
  discount_percent?: number;
  stock: number;
  is_active: boolean;
  category: CategoryProps;
  brand?: string;
  unit?: string;
  weight_or_volume?: number;
  tags?: string[];
}

export interface CategoryProps {
  _id: string;
  name: string;
  icon?: string;
}

export type GetProductsResult =
  { success: true; data: ProductProps[] } | { success: false; error: string };

export type GetProductResult =
  { success: true; data: ProductProps } | { success: false; error: string };

export interface CartItemRowProps {
  item: {
    _id: string;
    name: string;
    price: number;
    quantity: number;
    description?: string;
    brand?: string;
    weight_or_volume?: number;
    unit?: string;
    image?: string;
  };
}
