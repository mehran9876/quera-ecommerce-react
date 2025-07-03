interface SidebarHeadingProps {
  className?: string;
  children?: React.ReactNode;
}
export const SidebarHeading = ({
  className = "",
  children,
}: SidebarHeadingProps) => {
  return (
    <h4
      className={`bg-sidebar-bg inline-block rounded-full px-4 py-2 text-center ${className}`}
    >
      {children}
    </h4>
  );
};
