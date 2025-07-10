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
import UserProductReviews from "./components/product_page/UserProductReviews";
import AdminOrders from "./pages/AdminOrders";
import AdminOrderDetailed from "./pages/AdminOrderDetailed";
import UserCheckoutPage from "./pages/UserCheckoutPage";
import UserOrdersPage from "./pages/UserOrdersPage";
import UserOrderDetailedPage from "./pages/UserOrderDetailedPage";

// react query
// 1. Create a client
const queryClient = new QueryClient();

// react router
const router = createBrowserRouter([
  {
    Component: PageLayout,
    children: [
      { index: true, Component: UserHomePage },
      { path: "login", Component: Login },
      { path: "signup", Component: Register },
      {
        path: "products",
        Component: UserShopPage,
      },
      {
        path: "user",
        children: [
          { path: "cart", Component: UserCartPage },
          { path: "favorites", element: <h1>Favorites page</h1> },
          {
            path: "progress",
            Component: UserShoppingProgressPage,
          },
          {
            path: "checkout",
            Component: UserCheckoutPage,
          },
          { path: "orders", Component: UserOrdersPage },
          {
            path: "orders/:orderID",
            Component: UserOrderDetailedPage,
            loader: async ({ param }) =>
              await axiosInstance(`/api/orders/${param.orderID}`).then(
                (res) => res.data,
              ),
            errorElement: <p>error</p>,
          },
        ],
      },
      {
        path: "admin",
        children: [
          { path: "dashboard", element: <h1>Dashboard</h1> },
          {
            path: "users",
            Component: AdminUsersPage,
            errorElement: <p>error</p>,
            loader: async () =>
              await axiosInstance(`/api/users`).then((res) => res.data),
          },
          { path: "orders", Component: AdminOrders },
          {
            path: "orders/:orderID",
            Component: AdminOrderDetailed,
            loader: async ({ params }) =>
              await axiosInstance(`/api/orders/${params.orderID}`).then(
                (res) => res.data,
              ),
            errorElement: <p>error</p>,
          },
        ],
      },
      {
        path: "product/:productId",
        Component: UserProductPage,
        errorElement: <p>error</p>,
        loader: async ({ params }) =>
          await axiosInstance(`/api/products/${params.productId}`).then(
            (res) => res.data,
          ),
        children: [
          { index: true, Component: AddReviewComponent },
          { path: "comments", Component: UserProductReviews },
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
