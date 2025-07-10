import { useNavigate } from "react-router";
import { useLogOut } from "../../hooks/useLogOut";
import { useAuthStore } from "../../stores/use-auth-store";
import { SidebarItem } from "./SidebarItem";

interface AdminDropdownProps {
  isOpen: boolean;
  onLogout: () => void;
}
export const AdminDropdown = ({ isOpen, onLogout }: AdminDropdownProps) => {
  const links = [
    { to: "/admin/dashboard", text: "داشبورد" },
    { to: "/admin/new-product", text: "محصول جدید" },
    { to: "/admin/products", text: "محصولات" },
    { to: "/admin/users", text: "مدیریت کاربران" },
    { to: "/admin/orders", text: "سفارشات" },
    { to: "/user/profile", text: "پروفایل" },
  ];

  const navigator = useNavigate();
  const { setIsAdmin, setUserId } = useAuthStore();
  const { mutate, isPending } = useLogOut();
  const handleLogout = () => {
    mutate();
    onLogout();
    setIsAdmin(false);
    setUserId(null);
    navigator("/");
  };
  return (
    <ul
      className={`bg-bgDarkGray menu absolute right-10 bottom-10 flex w-42 flex-col gap-4 rounded-lg border-(--border-inputBorder) px-2 py-4 ${isOpen ? "block" : "hidden"}`}
      onClick={onLogout}
    >
      {links.map((link) => (
        <SidebarItem key={link.to} to={link.to}>
          {link.text}
        </SidebarItem>
      ))}
      <button
        className={`btn min-h-10 w-full min-w-max cursor-pointer gap-2 rounded-sm border-transparent bg-transparent p-2 text-base shadow-none`}
        disabled={isPending}
        onClick={handleLogout}
      >
        خروج
      </button>
    </ul>
  );
};
