import { NavLink } from "react-router";

interface SidebarItemProps {
  className?: string;
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export const SidebarItems = ({
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
    </li>
  );
};
