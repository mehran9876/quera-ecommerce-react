import { HomeIcon } from "./assets/icons";
import { SidebarItems } from "./components/SidebarItem";

function App() {
  return (
    <>
      <ul className="menu w-80 gap-4 bg-black">
        <SidebarItems to="/" icon={<HomeIcon />}>
          پیشخوان
        </SidebarItems>
        <SidebarItems to="/" icon={<HomeIcon />} isActive>
          پیشخوان
        </SidebarItems>
        <SidebarItems to="/" icon={<HomeIcon />}>
          پیشخوان
        </SidebarItems>
        <SidebarItems to="/" icon={<HomeIcon />}>
          پیشخوان
        </SidebarItems>
      </ul>
    </>
  );
}

export default App;
