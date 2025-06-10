import { NavLink } from "react-router";

interface SidebarItems {
  active?: boolean;
  className?: string;
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export const SidebarItems = ({
  active = false,
  className,
  to,
  icon,
  children,
}: SidebarItems) => {
  return (
    <li>
      <NavLink
        to={to}
        className={`flex gap-2 rounded-sm p-2 text-base ${active ? "bg-[#DB277711] text-[#DB2777]" : ""} ${className}`}
      >
        {icon}
        {children}
      </NavLink>
    </li>
  );
};
