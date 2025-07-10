import { useNavigate } from "react-router";
import { useLogOut } from "../../hooks/useLogOut";
import { useAuthStore } from "../../stores/use-auth-store";
import { SidebarItem } from "./SidebarItem";

interface UserAdminDropdownProps {
  isOpen: boolean;
  onLogout: () => void;
}
export const UserDropdown = ({ isOpen, onLogout }: UserAdminDropdownProps) => {
  const links = [
    { to: "/user/profile", text: "پروفایل" },
    { to: "/user/orders", text: "تاریخچه خرید" },
    { to: "/user/progress", text: "تکمیل سفارشات" },
    { to: "/user/checkout", text: "پرداخت" },
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
      className={`bg-bgDarkGray menu absolute right-10 bottom-10 z-50 flex w-42 flex-col gap-4 rounded-lg border-(--border-inputBorder) px-2 py-4 ${isOpen ? "block" : "hidden"}`}
      onClick={onLogout}
    >
      {links.map((link) => (
        <SidebarItem key={link.text} to={link.to}>
          {link.text}
        </SidebarItem>
      ))}
      <li>
        <button
          className={`min-h-10 w-full min-w-max cursor-pointer gap-2 rounded-sm p-2 text-base`}
          disabled={isPending}
          onClick={handleLogout}
        >
          خروج
        </button>
      </li>
    </ul>
  );
};
