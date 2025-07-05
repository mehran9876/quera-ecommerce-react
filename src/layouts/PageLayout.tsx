import { SidebarLayout } from "./Sidebar/SidebarLayout";
import { Outlet } from "react-router-dom";

export const PageLayout = () => {
  const sidebarExpanded = false;
  return (
    <div
      className={`grid h-screen ${sidebarExpanded ? "grid-cols-[1fr_4fr]" : "grid-cols-[72px_1fr]"}`}
    >
      <aside
        className={`fixed top-0 right-0 h-screen ${sidebarExpanded ? "w-1/5" : "w-18"}`}
      >
        <SidebarLayout expanded={sidebarExpanded} />
      </aside>
      <main className="col-start-2 overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
};
