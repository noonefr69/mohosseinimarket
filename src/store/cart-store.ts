import { create } from "zustand";

interface CartState {
  items: {
    _id: string;
    name: string;
    price: number;
    quantity: number;
    description?: string;
    brand?: string;
    unit?: string;
    weight_or_volume?: number;
    image?: string
  }[];
  addItem: (item: {
    _id: string;
    name: string;
    price: number;
    description?: string;
    brand?: string;
    unit?: string;
    weight_or_volume?: number;
    image?: string
  }) => void;
  removeItem: (_id: string) => void;
  removeWholeItem: (_id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item) => {
    set((state) => {
      const existing = state.items.find((i) => i._id === item._id);

      if (existing) {
        return {
          items: state.items.map((i) =>
            i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        };
      }
      return {
        items: [...state.items, { ...item, quantity: 1 }],
      };
    });
  },
  removeItem: (_id) => {
    set((state) => {
      const existing = state.items.find((i) => i._id === _id);
      if (!existing) return state;

      if (existing.quantity === 1) {
        return {
          items: state.items.filter((i) => i._id !== _id),
        };
      }

      return {
        items: state.items.map((i) =>
          i._id === _id ? { ...i, quantity: i.quantity - 1 } : i,
        ),
      };
    });
  },
  removeWholeItem: (_id) => {
    set((state) => ({
      items: state.items.filter((i) => i._id !== _id),
    }));
  },
  clearCart: () => {
    set({ items: [] });
  },
}));
