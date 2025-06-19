import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar"
import SideBar from "./Sidebar.jsx"
import useAuthUser from "../hooks/useAuthUser.js";

export default  function Layout({ children }) {

  const {authData} = useAuthUser();

  return (
    <SidebarProvider
      style={{
      "--sidebar-width": "200px",
      "--sidebar-width-mobile": "20rem",
      }}
      collapsible="icon"
      > 
      <div className="flex w-full min-h-screen ">
        <SideBar/>
        <main className="flex-col flex-1 w-full min-h-screen p-4">
          <div className="flex items-center justify-between w-full gap-3">
            <div className="flex items-center">
              <SidebarTrigger/>
              <p>DashBoard</p>
            </div>
            <p>{authData?.user?.name}</p>
          </div>
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
