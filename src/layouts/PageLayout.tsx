import { SidebarLayout } from "./Sidebar/SidebarLayout";
import { Outlet } from "react-router-dom";
import HamburgerMenu from "../components/general/HamburgerMenu";
export const PageLayout = () => {
  const sidebarExpanded = false;
  return (
    <div
      className={`grid h-screen ${sidebarExpanded ? "grid-cols-[1fr_4fr]" : "grid-cols-[72px_1fr]"}`}
    >
      <aside
        className={`fixed top-0 right-0 z-20 h-screen ${sidebarExpanded ? "w-1/5" : "w-18"}`}
      >
        <SidebarLayout />
      </aside>
      <main className="z-0 col-start-2 overflow-scroll relative">
        <Outlet />
        <div className="absolute top-0 left-0"><HamburgerMenu/> </div>
      </main>
    </div>
  );
};
