"use client";
import { type LucideIcon } from "lucide-react";
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { IconType } from "react-icons/lib";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
export function SidebarMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: IconType | LucideIcon;
  }[];
}) {
  const pathName = usePathname();

  return (
    <SidebarGroup>
      {/* <SidebarGroupLabel>Platform</SidebarGroupLabel> */}
      <SidebarMenu className="flex flex-col gap-2">
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <Link className="flex flex-row items-center gap-4" href={item.url}>
              <SidebarMenuButton
                tooltip={item.title}
                className={cn("p-5 rounded-lg transition-all duration-300", pathName === item.url && "bg-primary text-secondary")}
              >
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
