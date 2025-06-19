import { Calendar, Home, Inbox, Search, Settings,LogOut } from "lucide-react"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {logOut} from '../lib/api.js'
import toast from "react-hot-toast";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from "./ui/sidebar.jsx"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },

]

export default function SideBar() {
  const queryClient = useQueryClient();
  const {mutate: logoutForm} = useMutation({
    mutationFn: logOut,
    onSuccess: () => {
      toast.success("Logged out successfully", {id: "logOut"});
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
    onMutate: () => {
      toast.loading("Logging out...", { id: "logOut" })
    },
    onError: (error) => {
      toast.dismiss()
      toast.error(error.response.data.message, { id: "logOut" })
    },
    
  })

  const handleLogout = () => {
    logoutForm();
  };

  const {state} = useSidebar();

  return (
    <Sidebar collapsible="icon" variant="floating" className={"font-Sora"}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  
                </SidebarMenuItem>
              ))
              }
            <SidebarMenuItem>
              <SidebarMenuButton onClick={handleLogout} >
                <LogOut />
                <span>Log out</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {state !== "collapsed" && 
        <SidebarFooter>
          <p className="text-sm">&copy; 2023 Your Company</p>
        </SidebarFooter>
      }
    </Sidebar>
  )
}