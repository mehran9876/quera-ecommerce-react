import { Outlet } from "react-router";
import { useAuthStore } from "../stores/use-auth-store";

const User = () => {
  const { userId } = useAuthStore();
  if (!userId) {
    return <div>You don't have access to this page</div>;
  }
  return <>{<Outlet />}</>;
};

export default User;
