"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { UserLogOut } from "@/services/auth";


interface Props {
  user: {
    name: string;
    role: "PROVIDER" | "ADMIN";
  };
}

export default function DashboardNavbar({ user }: Props) {
  const router = useRouter();

  const handleLogout = async () => {
    await UserLogOut();
    router.push("/login");
  };

  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-6">
      <Link href="/" className="text-xl font-bold text-orange-500">
        FoodHub 🍱
      </Link>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          {user.role}
        </span>

        <Avatar className="h-8 w-8">
          <AvatarFallback>
            {user.name.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <Button onClick={handleLogout} variant="outline" size="sm">
          Logout
        </Button>
      </div>
    </header>
  );
}