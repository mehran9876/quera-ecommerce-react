import type { ReactNode } from "react";
import { SidebarLayout } from "./Sidebar/SidebarLayout";

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  const sidebarExpanded = true;
  return (
    <div
      className={`grid h-screen ${sidebarExpanded ? "grid-cols-[1fr_4fr]" : "grid-cols-[72px_1fr]"} gap-4`}
    >
      <aside
        className={`fixed top-0 right-0 h-screen ${sidebarExpanded ? "w-1/5" : "w-18"}`}
      >
        <SidebarLayout expanded={sidebarExpanded} />
      </aside>
      <main className="col-start-2 overflow-scroll">{children}</main>
    </div>
  );
};
