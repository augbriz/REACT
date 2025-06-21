import { create } from 'zustand';

export interface CartItem {
    id: string; // ID del juego
    name: string; // Nombre del juego
    price: number; // Precio del juego
    qty: number; // Cantidad del juego en el carrito
    }

interface CartState {
    items: CartItem[]; // Lista de juegos en el carrito
    add: (item: Omit<CartItem, 'qty'>) => void; // Añadir un juego al carrito
    clear: () => void; // Limpiar el carrito
    remove: (id: string) => void; // Eliminar un juego del carrito
    totalQty: () => number; // Obtener la cantidad total de juegos en el carrito
    totalPrice: () => number; // Obtener el precio total de los juegos en el carrito
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  add: (item) =>
    set((state) => {
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        existing.qty += 1;
        return { items: [...state.items] }; // fuerza nuevo array
      }
      return { items: [...state.items, { ...item, qty: 1 }] };
    }),

  remove: (id) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    })),

  clear: () => set({ items: [] }),

  totalQty: () => get().items.reduce((sum, i) => sum + i.qty, 0),

  totalPrice: () =>
    get().items.reduce((sum, i) => sum + i.price * i.qty, 0),
}));