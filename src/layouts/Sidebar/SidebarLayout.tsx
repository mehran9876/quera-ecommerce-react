// SidebarLayout component manages the sidebar UI, including navigation links and user dropdown
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

// Props for SidebarLayout, currently only controls expansion state
interface SidebarItemProps {
  expanded?: boolean;
}

// Main SidebarLayout component
export const SidebarLayout = ({ expanded = true }: SidebarItemProps) => {
  // State to control user dropdown visibility
  const [userDropdownIsOpen, setUserDropdownIsOpen] = useState<boolean>(false);
  // ! Placeholder user object; replace with global user/auth context in production
  // const user: { name: string; email: string; type: "user" | "admin" } | null = {
  //   name: "mm",
  //   email: "mm",
  //   type: "user",
  // };
  const user: { name: string; email: string; type: "user" | "admin" } | null =
    null;

  return (
    // Sidebar container with dynamic width based on 'expanded' prop
    <div
      className={`bg-sidebar-bg text-primaryFont relative flex h-full w-full flex-col items-start justify-between p-4`}
    >
      {/* Main navigation links */}
      <SidebarList>
        <SidebarItem to="/" icon={<HomeIcon />}>
          {expanded ? "صفحه اصلی" : ""}
        </SidebarItem>
        <SidebarItem to="/shop" icon={<ShopIcon />}>
          {expanded ? "محصولات" : ""}
        </SidebarItem>
        <SidebarItem to="/user/cart" icon={<CartIcon />}>
          {expanded ? "سبد خرید" : ""}
        </SidebarItem>
        <SidebarItem to="/user/favorites" icon={<HeartIcon />}>
          {expanded ? "علاقه مندی ها" : ""}
        </SidebarItem>
      </SidebarList>
      {/* Show login/signup if no user is present */}
      {!user && (
        <SidebarList className="max-h-min gap-y-4">
          <SidebarItem to="/login" icon={<LoginIcon />}>
            {expanded ? "ورود" : ""}
          </SidebarItem>
          <SidebarItem to="/signup" icon={<SignupIcon />}>
            {expanded ? "ثبت‌نام" : ""}
          </SidebarItem>
        </SidebarList>
      )}
      {/* Show user dropdown if user is present */}
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
