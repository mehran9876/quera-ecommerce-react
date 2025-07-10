export interface CartItem {
  _id: string;
  name: string;
  quantity: number;
}

export interface CartStateI {
  cart: CartItem[];
  addToCart: (productId: string, name: string, quantity?: number) => void;
  changeQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
}
