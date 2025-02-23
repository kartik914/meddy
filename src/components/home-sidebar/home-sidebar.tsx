"use client";

import { navData } from "@/data/nav-data";
import { Sidebar, SidebarContent, SidebarFooter, SidebarTrigger } from "../ui/sidebar";
import { SidebarMain } from "./sidebar-main";
import { NavUser } from "./nav-user";

export const HomeSidebar = () => {
  return (
    <Sidebar className="pt-16 border-none z-0" collapsible="icon">
      <SidebarTrigger className="absolute top-16 -right-4 z-50 bg-muted rounded-full" />
      <SidebarContent className="pt-4">
        <SidebarMain items={navData.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
};
