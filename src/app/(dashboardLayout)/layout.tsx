"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import { getUser } from "@/services/auth";

type UserRole = "PROVIDER" | "ADMIN";

interface User {
  name: string;
  role: UserRole;
}

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loadUser = async () => {
      const data = await getUser();

      if (!data || (data.role !== "PROVIDER" && data.role !== "ADMIN")) {
        router.push("/login");
        return;
      }

      setUser(data);
    };

    loadUser();
  }, [router]);

  if (!user) {
    return <div className="p-10">Loading dashboard...</div>;
  }

  return (
    <div className="h-screen flex flex-col">
      {/* Top Navbar */}
      <DashboardNavbar user={user} />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <DashboardSidebar role={user.role} />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}