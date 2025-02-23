import { HomeSidebar } from "@/components/home-sidebar/home-sidebar";
import { TopNavBar } from "@/components/top-nav-bar/top-nav-bar";
import { SidebarProvider } from "@/components/ui/sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="w-full h-full">
        <TopNavBar />
        <div className="flex">
          <HomeSidebar />
          <main className="flex-1 overflow-y-auto pt-16 px-4">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
