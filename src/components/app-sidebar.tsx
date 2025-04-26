import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import Link from "next/link";
import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export async function AppSidebar() {
  const session = await auth();
  let imageUrl: string | undefined;
  if (session?.user?.image) {
    imageUrl = session.user.image;
  }
  
  // Menu items.
  const items = [
    {
      title: "Home",
      url: "/dashboard",
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
  ];
  return (
    <Sidebar>
      <SidebarContent>
        <div className="text-2xl font-bold ml-4 mt-2 text-amber-400">
          Company Logo
        </div>
        <SidebarGroup />
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
      {session?.user && (
        <Link
          href="/dashboard/profile"
          className="px-4 py-2 flex items-center gap-2"
        >
          <Avatar className="w-10 h-10">
            <AvatarImage
              src={imageUrl ? imageUrl : "https://github.com/shadcn.png"}
            />
            <AvatarFallback>{session.user.name?.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            {session.user.name}
            <span className="text-sm text-muted-foreground">
              {session.user.email}
            </span>
          </div>
        </Link>
      )}
    </Sidebar>
  );
}
