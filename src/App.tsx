import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PageLayout } from "./layouts/PageLayout";
import UserProductPage from "./pages/UserProduct/UserProductPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserCartPage from "./pages/userCartPage";
import AdminUsersPage from "./pages/AdminUsersPage";

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

// react query
// 1. Create a client
const queryClient = new QueryClient();

// react router
const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      { index: true, element: <h1>Home Page</h1> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Register /> },
      { path: "shop", element: <h1>User shop page</h1> },
      {
        path: "user",
        children: [
          { path: "cart", element: <UserCartPage /> },
          { path: "favorites", element: <h1>Favorites page</h1> },
        ],
      },
      {
        path: "admin",
        children: [
          { path: "dashboard", element: <h1>Dashboard</h1> },
          {
            path: "users",
            element: <AdminUsersPage />,
            errorElement: <p>error</p>,
            loader: async () => await fetch(`https://qbc9.liara.run/api/users`),
          },
        ],
      },
      {
        path: "product/:productId",
        element: <UserProductPage />,
        errorElement: <p>error</p>,
        loader: async ({ params }) =>
          await fetch(
            `https://qbc9.liara.run/api/products/${params.productId}`,
          ),
      },
      {
        path: "*",
        element: <h1>404</h1>,
      },
    ],
  },
]);
function App() {
  return (
    // 2. Provide the client to your app
    <QueryClientProvider client={queryClient}>
      {/* using router */}
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
