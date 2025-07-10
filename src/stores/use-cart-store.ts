import { create } from "zustand";
import type { CartItem, CartStateI } from "../types/cartTypes";

function getCartFromStorage(): CartItem[] {
  try {
    const data = JSON.parse(localStorage.getItem("cart") || "[]");
    return Array.isArray(data) &&
      data.every(
        (item) =>
          typeof item._id === "string" &&
          typeof item.name === "string" &&
          typeof item.quantity === "number",
      )
      ? data
      : [];
  } catch {
    return [];
  }
}

function setCartToStorage(cart: CartItem[]) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export const useCartStore = create<CartStateI>((set) => ({
  cart: getCartFromStorage(),

  addToCart: (productId: string, name: string, quantity: number = 1) =>
    set(({ cart }) => {
      let newCart;
      if (cart.find((item) => item._id === productId)) {
        newCart = cart.map((item) =>
          item._id === productId ? { ...item, quantity: quantity } : item,
        );
      } else {
        newCart = [...cart, { _id: productId, name, quantity }];
      }
      setCartToStorage(newCart);
      return { cart: newCart };
    }),
  changeQuantity: (productId, quantity) =>
    set(({ cart }) => {
      const newCart = cart
        .map((item) => (item._id === productId ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0);
      setCartToStorage(newCart);
      return { cart: newCart };
    }),

  removeFromCart: (productId) =>
    set(({ cart }) => {
      const newCart = cart.filter((item) => item._id !== productId);
      setCartToStorage(newCart);
      return { cart: newCart };
    }),
}));
