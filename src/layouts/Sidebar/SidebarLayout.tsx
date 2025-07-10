// SidebarLayout component manages the sidebar UI, including navigation links and user dropdown
import { useRef, useState } from "react";
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
import ThemeSwitch from "../../components/general/ThemeSwitch";
import { useAuthStore } from "../../stores/use-auth-store";
import { AdminDropdown } from "../../components/Sidebar/AdminDropDown";
import { UserDropdown } from "../../components/Sidebar/UserDropdown";

// Props for SidebarLayout, currently only controls expansion state
// interface SidebarItemProps {
//   expanded?: boolean;
// }

// Main SidebarLayout component
export const SidebarLayout = () => {
  // State to control user dropdown visibility
  const [userDropdownIsOpen, setUserDropdownIsOpen] = useState<boolean>(false);
  const [expanded, setExpanded] = useState(false);
  const expansionTimeout = useRef(0);

  const { isAdmin, userId } = useAuthStore();

  const handleMouseEnter = () => {
    expansionTimeout.current = setTimeout(() => {
      setExpanded(true);
    }, 300);
  };
  const handleMouseLeave = () => {
    clearTimeout(expansionTimeout.current);
    setExpanded(false);
  };

  return (
    // Sidebar container with dynamic width based on 'expanded' prop
    <div
      className={`bg-sidebar-bg text-primaryFont relative flex h-full flex-col items-start justify-between p-4 transition-[width] duration-300 ${expanded ? "w-[200px]" : "w-full"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main navigation links */}
      <SidebarList>
        <SidebarItem to="/" icon={<HomeIcon />}>
          {expanded ? "صفحه اصلی" : ""}
        </SidebarItem>
        <SidebarItem to="/products" icon={<ShopIcon />}>
          {expanded ? "محصولات" : ""}
        </SidebarItem>
        <SidebarItem to="/user/cart" icon={<CartIcon />}>
          {expanded ? "سبد خرید" : ""}
        </SidebarItem>
        <SidebarItem to="/user/favorites" icon={<HeartIcon />}>
          {expanded ? "علاقه مندی ها" : ""}
        </SidebarItem>
      </SidebarList>
      <div>
        <ThemeSwitch />
        {/* Show login/signup if no user is present */}
        {!userId && (
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
        {userId && isAdmin && (
          <div>
            <UserAdminSidebarBtn
              isOpen={userDropdownIsOpen}
              onClick={() => setUserDropdownIsOpen((isOpen) => !isOpen)}
            >
              ادمین
            </UserAdminSidebarBtn>
            <AdminDropdown
              onLogout={() => setUserDropdownIsOpen(false)}
              isOpen={userDropdownIsOpen}
            />
          </div>
        )}
        {userId && !isAdmin && (
          <div>
            <UserAdminSidebarBtn
              isOpen={userDropdownIsOpen}
              onClick={() => setUserDropdownIsOpen((isOpen) => !isOpen)}
            >
              کاربر
            </UserAdminSidebarBtn>
          </div>
        )}
        <UserDropdown
          onLogout={() => setUserDropdownIsOpen(false)}
          isOpen={userDropdownIsOpen}
        />
      </div>
    </div>
  );
};
