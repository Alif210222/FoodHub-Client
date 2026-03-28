"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import { getUser } from "@/services/auth";
import { Menu } from "lucide-react";

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
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await getUser();

        if (!data || !["ADMIN", "PROVIDER"].includes(data.role)) {
          router.replace("/login");
          return;
        }

        setUser(data);
      } catch {
        router.replace("/login");
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [router]);

  if (loading) return null;

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Navbar */}
      <DashboardNavbar user={user!} />

      <div className="flex flex-1 overflow-hidden relative">
        
        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={`
            fixed md:static z-50 md:z-auto
            h-full md:h-auto
            w-64
            transform transition-transform duration-300
            bg-white
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            md:translate-x-0
          `}
        >
          <DashboardSidebar role={user!.role} />
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6 w-full">
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden mb-4 flex items-center gap-2 text-sm font-medium"
          >
            <Menu size={20} />
            Menu
          </button>

          {children}
        </main>
      </div>
    </div>
  );
}