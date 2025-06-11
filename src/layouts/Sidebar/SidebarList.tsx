interface SidebarListProps {
  className?: string;
  children: React.ReactNode;
}
export const SidebarList = ({ className = "", children }: SidebarListProps) => {
  return (
    <ul className={`menu flex w-full flex-col gap-12 p-0 ${className}`}>
      {children}
    </ul>
  );
};
