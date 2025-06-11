import { Chevron } from "../../assets/icons";

interface UserAdminSidebarBtnProps {
  isOpen: boolean;
  onClick: () => void;
}
export const UserAdminSidebarBtn = ({
  isOpen,
  onClick,
}: UserAdminSidebarBtnProps) => {
  return (
    <a
      onClick={onClick}
      className="flex cursor-pointer items-center gap-1 text-xs"
    >
      کاربر
      <Chevron variant={isOpen ? "up" : "down"} />
    </a>
  );
};
