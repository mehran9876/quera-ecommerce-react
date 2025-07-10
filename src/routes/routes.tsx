import { createBrowserRouter } from "react-router-dom";
import { PageLayout } from "../layouts/PageLayout";
import AdminOrderDetailed from "../pages/AdminOrderDetailed";
import AdminUsersPage from "../pages/AdminUsersPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserCartPage from "../pages/userCartPage";
import UserCheckoutPage from "../pages/UserCheckoutPage";
import UserOrderDetailedPage from "../pages/UserOrderDetailedPage";
import UserOrdersPage from "../pages/UserOrdersPage";
import UserShopPage from "../pages/userShopPage";
import UserShoppingProgressPage from "../pages/UserShoppingProgressPage";
import axiosInstance from "../utils/axios";
import UserProductPage from "../pages/UserProductPage";
import AddReviewComponent from "../components/product_page/AddReviewComponent";
import UserProductReviews from "../components/product_page/UserProductReviews";
import AdminOrders from "../pages/AdminOrders";
import App from "../App";
import Admin from "../layouts/Admin";
import User from "../layouts/User";

const router = createBrowserRouter([
  {
    Component: PageLayout,
    children: [
      { index: true, Component: App },
      { path: "login", Component: Login },
      { path: "signup", Component: Register },
      {
        path: "products",
        Component: UserShopPage,
      },
      {
        path: "user",
        Component: User,
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
            loader: async ({ params }) =>
              await axiosInstance(`/api/orders/${params.orderID}`).then(
                (res) => res.data,
              ),
            errorElement: <p>error</p>,
          },
        ],
      },
      {
        path: "admin",
        Component: Admin,
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

export default router;
