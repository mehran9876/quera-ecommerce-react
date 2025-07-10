import { Chevron } from "../../assets/icons";

interface UserAdminSidebarBtnProps {
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}
export const UserAdminSidebarBtn = ({
  isOpen,
  onClick,
  children,
}: UserAdminSidebarBtnProps) => {
  return (
    <a
      onClick={onClick}
      className="flex cursor-pointer items-center gap-1 text-xs"
    >
      {children}
      <Chevron variant={isOpen ? "up" : "down"} />
    </a>
  );
};
