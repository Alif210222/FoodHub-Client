"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  role: "PROVIDER" | "ADMIN";
}

export default function DashboardSidebar({ role }: Props) {
  return (
    <aside className="w-64 bg-white border-r p-4">
      <nav className="space-y-2">

        {/* PROVIDER MENU */}
        {role === "PROVIDER" && (
          <>
            <SidebarLink href="/provider/dashboard">
              Dashboard
            </SidebarLink>
            <SidebarLink href="/provider/menu">
              Manage Menu
            </SidebarLink>
            <SidebarLink href="/provider/orders">
              Orders
            </SidebarLink>
          </>
        )}

        {/* ADMIN MENU */}
        {role === "ADMIN" && (
          <>
            <SidebarLink href="/admin">
              Dashboard
            </SidebarLink>
            <SidebarLink href="/admin/users">
              Users
            </SidebarLink>
            <SidebarLink href="/admin/orders">
              Orders
            </SidebarLink>
            <SidebarLink href="/admin/categories">
              Categories
            </SidebarLink>
          </>
        )}

      </nav>
    </aside>
  );
}

function SidebarLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "block px-4 py-2 rounded-md text-sm font-medium",
        "hover:bg-orange-100 hover:text-orange-600"
      )}
    >
      {children}
    </Link>
  );
}