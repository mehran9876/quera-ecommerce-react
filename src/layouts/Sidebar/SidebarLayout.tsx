import { useState } from "react";
import {
  CartIcon,
  HeartIcon,
  HomeIcon,
  LoginIcon,
  ShopIcon,
  SignupIcon,
} from "../../assets/icons";
import { SidebarItem } from "../../components/Sidebar/SidebarItem";
import { SidebarList } from "./SidebarList";
import { UserAdminSidebarBtn } from "../../components/Sidebar/UserAdminSidebarBtn";
import { UserAdminDropdown } from "../../components/Sidebar/UserAdminDropdown";

interface SidebarItemProps {
  expanded?: boolean;
}

export const SidebarLayout = ({ expanded = true }: SidebarItemProps) => {
  const [userDropdownIsOpen, setUserDropdownIsOpen] = useState<boolean>(false);
  const user: { name: string; email: string; type: "user" | "admin" } | null = {
    name: "mm",
    email: "mm",
    type: "user",
  };

  return (
    <div
      className={`bg-sidebar-bg text-primaryFont relative flex h-screen flex-col items-start justify-between p-4 ${expanded ? "w-1/4" : "w-min"}`}
    >
      <SidebarList>
        <SidebarItem to="/" icon={<HomeIcon />} isActive>
          {expanded ? "صفحه اصلی" : ""}
        </SidebarItem>
        <SidebarItem to="/" icon={<ShopIcon />}>
          {expanded ? "محصولات" : ""}
        </SidebarItem>
        <SidebarItem to="/" icon={<CartIcon />}>
          {expanded ? "سبد خرید" : ""}
        </SidebarItem>
        <SidebarItem to="/" icon={<HeartIcon />}>
          {expanded ? "علاقه مندی ها" : ""}
        </SidebarItem>
      </SidebarList>
      {!user && (
        <SidebarList className="max-h-min gap-y-4">
          <SidebarItem to="" icon={<LoginIcon />}>
            {expanded ? "ورود" : ""}
          </SidebarItem>
          <SidebarItem to="" icon={<SignupIcon />}>
            {expanded ? "ثبت‌نام" : ""}
          </SidebarItem>
        </SidebarList>
      )}
      {user && (
        <>
          <UserAdminSidebarBtn
            isOpen={userDropdownIsOpen}
            onClick={() => setUserDropdownIsOpen((isOpen) => !isOpen)}
          />
          <UserAdminDropdown isOpen={userDropdownIsOpen} />
        </>
      )}
    </div>
  );
};
