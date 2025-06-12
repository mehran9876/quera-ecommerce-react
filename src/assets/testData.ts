export type ProductType = {
  _id: string;
  name: string;
  image: string;
  quantity: number;
  category: string;
  description: string;
  rating: number;
  numReviews: number;
  price: number;
  countInStock: number;
  reviews: [];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export const product: ProductType = {
  _id: "6849d43c84b146939019c32a",
  name: "test product",
  image: "https://qbc9.liara.run/uploads/image-1749668835681.JPG",
  quantity: 4,
  category: "6849d35484b146939019c322",
  description: "this is a desc",
  rating: 0,
  numReviews: 0,
  price: 150000,
  countInStock: 4,
  reviews: [],
  createdAt: "2025-06-11T19:08:44.587Z",
  updatedAt: "2025-06-11T19:08:44.587Z",
  __v: 0,
};
