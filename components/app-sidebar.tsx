"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { FrameIcon, PieChartIcon, MapIcon,  MessageSquare, Receipt, Settings, LayoutDashboard, FolderKanban, Users, UserCog, BarChart3, FolderClosedIcon, MessageSquareMoreIcon, ThumbsUpIcon } from "lucide-react"
import { useUser } from "@clerk/nextjs"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser();
  const data = {
    user: {
      name: user?.fullName ?? "user",
      email: user?.emailAddresses[0].emailAddress ?? "user-email@gmail.com",
      avatar: user?.imageUrl ?? "/avatars/shadcn.jpg",
    },
    teams: {
      name: "Savanna Labs",
      plan: "Client Dashboard",
    },
    navMain: [
      // Shared Pages
      {  
        title: "Overview",
        url: "/dashboard",
        icon: <LayoutDashboard />,
        role: "both",
      },
      {
        title: "Messages",
        url: "/dashboard/messages",
        icon: <MessageSquare />,
        role: "both",
      },
      {
        title: "Invoices",
        url: "/dashboard/invoices",
        icon: <Receipt />,
        role: "both",
      },
      {
        title: "Settings",
        url: "/dashboard/settings",
        icon: <Settings />,
        role: "both",
      },
      // Admin Pages
      {
        title: "All Projects",
        url: "/admin/projects",
        icon: <FolderKanban />,
        role: "admin",
      },
      {
        title: "Clients",
        url: "/admin/clients",
        icon: <Users />,
        role: "admin",
      },
      {
        title: "Team",
        url: "/admin/team",
        icon: <UserCog />,
        role: "admin",
      },
      {
        title: "Analytics",
        url: "/admin/analytics",
        icon: <BarChart3 />,
        role: "admin",
      },
      // CLIENT PAGES
      {
        title: "My Projects",
        url: "/dashboard/projects",
        icon: <FolderKanban />,
        role: "client",
      },
      {
        title: "Recommendations",
        url: "/dashboard/recommendations",
        icon: <ThumbsUpIcon />,
        role: "client",
      },
    ],
    projects: [
      // List of Projects by the client. Both active and currently working. 
      {
        name: "Design Engineering",
        url: "#",
        icon: (
          <FrameIcon
          />
        ),
      }
    ],
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
