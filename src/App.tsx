import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PageLayout } from "./layouts/PageLayout";
import UserProductPage from "./pages/UserProductPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserCartPage from "./pages/userCartPage";
import AdminUsersPage from "./pages/AdminUsersPage";
import axiosInstance from "./utils/axios";
import UserShopPage from "./pages/userShopPage";
import AddReviewComponent from "./components/product_page/AddReviewComponent";
import UserHomePage from "./pages/UserHomePage";
import UserShoppingProgressPage from "./pages/UserShoppingProgressPage";

// react query
// 1. Create a client
const queryClient = new QueryClient();

// react router
const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      { index: true, element: <UserHomePage /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Register /> },
      {
        path: "products",
        element: <UserShopPage />,
      },
      {
        path: "user",
        children: [
          { path: "cart", element: <UserCartPage /> },
          { path: "favorites", element: <h1>Favorites page</h1> },
          {
            path: "payout",
            Component: UserShoppingProgressPage,
          },
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
            loader: async () =>
              await axiosInstance(`/api/users`).then((res) => res.data),
          },
        ],
      },
      {
        path: "product/:productId",
        element: <UserProductPage />,
        errorElement: <p>error</p>,
        loader: async ({ params }) =>
          await axiosInstance(`/api/products/${params.productId}`).then(
            (res) => res.data,
          ),
        children: [
          { index: true, element: <AddReviewComponent /> },
          { path: "comments", element: <h1>comments</h1> },
          { path: "related", element: <h1>related</h1> },
        ],
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
