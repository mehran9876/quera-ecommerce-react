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
          `flex gap-2 rounded-sm p-2 text-base ${isActive ? "bg-[#DB277711] text-[#DB2777]" : ""} ${className}`
        }
      >
        {icon}
        {children}
      </NavLink>
      {/* <a
        href={to}
        className={`flex w-full gap-2.5 rounded-sm p-2 text-base ${isActive ? "bg-[#DB277711] text-[#DB2777]" : ""} ${className}`}
      >
        {icon && (
          <span className="flex h-6.5 w-6 items-center justify-center">
            {icon}
          </span>
        )}
        {children}
      </a> */}
    </li>
  );
};
