import { SidebarItem } from "./SidebarItem";

interface UserAdminDropdownProps {
  isOpen: boolean;
}
export const UserAdminDropdown = ({ isOpen }: UserAdminDropdownProps) => {
  const links = [
    { to: "", text: "پروفایل" },
    { to: "", text: "خروج" },
  ];
  return (
    <ul
      className={`bg-bgDarkGray menu absolute right-10 bottom-10 flex w-42 flex-col gap-4 rounded-lg border-(--border-inputBorder) px-2 py-4 ${isOpen ? "block" : "hidden"}`}
    >
      {links.map((link) => (
        <SidebarItem key={link.to} to={link.to}>
          {link.text}
        </SidebarItem>
      ))}
    </ul>
  );
};
