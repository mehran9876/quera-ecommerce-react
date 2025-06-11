interface SidebarHeadingProps {
  className: string;
  children?: React.ReactNode;
}
export const SidebarHeading = ({
  className = "",
  children,
}: SidebarHeadingProps) => {
  return (
    <h4
      className={`bg-sidebar-bg inline-block rounded-full px-13 py-2 ${className}`}
    >
      {children}
    </h4>
  );
};
