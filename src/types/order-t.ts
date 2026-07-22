export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  unit?: string;
  weight_or_volume?: number;
}

export interface OrderType {
  _id: string;
  user: string;
  items: OrderItem[];
  status: "pending" | "uploaded" | "verified" | "rejected";
  quantity: number;
  validation_image: string;
  total: string;
  address: string;
  admin_note: string | null;
}

export type OrdersProps =
  { success: true; data: OrderType[] } | { success: false; error: string };
