import { SidebarLayout } from "./Sidebar/SidebarLayout";
import { Outlet } from "react-router-dom";

export const PageLayout = () => {
  return (
    <div className={`grid h-screen grid-cols-[72px_1fr]`}>
      <aside className={`fixed top-0 right-0 z-20 h-screen w-18`}>
        <SidebarLayout />
      </aside>
      <main className="z-0 col-start-2 overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
};
