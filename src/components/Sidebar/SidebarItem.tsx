// import { NavLink } from "react-router";

import { NavLink } from "react-router";

interface SidebarItemProps {
  className?: string;
  to: string;
  isActive?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const SidebarItem = ({
  className = "",
  to,
  icon,
  children,
}: SidebarItemProps) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex min-h-10 w-full min-w-max gap-2 rounded-sm p-2 text-base ${isActive ? "bg-[#DB277711] text-[#DB2777]" : ""} ${className}`
        }
      >
        {icon}
        {children}
      </NavLink>
    </li>
  );
};
