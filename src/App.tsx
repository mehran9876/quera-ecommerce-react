import { SidebarLayout } from "./layouts/Sidebar/SidebarLayout";

function App() {
  const sidebarExpanded = false;
  return (
    <>
      <SidebarLayout expanded={sidebarExpanded} />
    </>
  );
}

export default App;
