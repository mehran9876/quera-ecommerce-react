export type OrderItemType = {
  _id: string;
  name: string;
  qty: number;
  price: number;
  image: string;
  product: string;
};

export type OrderType = {
  _id: string;
  user: null | {
    _id: string;
    username: string;
  };
  orderItems: OrderItemType[];
  shippingAddress: {
    address: string;
    city: string;
    postalCode: string;
  };
  paymentResult?: {
    update_time: string;
  };
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  paidAt?: string;
  isDelivered: boolean;
  deliveredAt?: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
