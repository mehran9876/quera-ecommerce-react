export type ProductsPagination = {
  page: number;
  total: number;
  hasMore: boolean;
  products: ProductType[];
};

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
