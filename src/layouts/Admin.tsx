import { useAuthStore } from "../stores/use-auth-store";
import { Outlet } from "react-router";

const Admin = () => {
  const { isAdmin } = useAuthStore();
  if (!isAdmin) {
    return <p>You don't have access to this page</p>;
  }
  return <>{<Outlet />}</>;
};

export default Admin;
