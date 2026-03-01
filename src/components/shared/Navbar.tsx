"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { getUser, UserLogOut } from "@/services/auth";

/**
 * Replace this with your real auth hook (NextAuth / custom auth)
 */
type UserRole = "CUSTOMER" | "PROVIDER" | "ADMIN";

interface User {
  name: string;
  role: UserRole;
}

const mockUser: User | null = null;
// const mockUser: User = { name: "Rony", role: "CUSTOMER" };

export default function Navbar() {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(false)
    const router = useRouter();

    console.log(user);

    useEffect(()=>{
      const getCurrentUser = async() =>{
        const userData = await getUser()
        setUser(userData)
      }

      getCurrentUser()
    },[])


    // logout feature
    const handleLogout =async ()=>{
          

         await UserLogOut()
         setUser(null)
         setLoading(true)
         router.push("/login")
    }


  //const user = mockUser; // replace with real user state

  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-orange-500">
          FoodHub 🍱
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/meals" className="text-sm font-medium hover:text-orange-500">
            Meals
          </Link>
          <Link href="/providers" className="text-sm font-medium hover:text-orange-500">
            Providers
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-orange-500">
            About
          </Link>

          {!user && (
            <>
              <Link href="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/register">
                <Button>Register</Button>
              </Link>
            </>
          )}

          {user && (
            <UserDropdown user={user} onLogout={handleLogout}  />
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <Menu />
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-6">
                <Link href="/meals">Meals</Link>
                <Link href="/providers">Providers</Link>
                <Link href="/about">About</Link>

                {!user && (
                  <>
                    <Link href="/login">
                      <Button  variant="outline" className="w-full">
                        Login
                      </Button>
                    </Link>
                    <Link href="/register">
                      <Button className="w-full">
                        Register
                      </Button>
                    </Link>
                  </>
                )}


                {user && (
                  <>
                    <Link href="/profile">Profile</Link>
                    {user.role === "CUSTOMER" && (
                      <>
                        <Link href="/cart">Cart</Link>
                        <Link href="/orders">My Orders</Link>
                      </>
                    )}
                    {user.role === "PROVIDER" && (
                      <Link href="/provider/dashboard">Provider Dashboard</Link>
                    )}
                    {user.role === "ADMIN" && (
                      <Link href="/admin">Admin Dashboard</Link>
                    )}
                    <Button onClick={handleLogout} variant="destructive">Logout</Button>
                  </>
                )}

              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  );
}

/* ================= USER DROPDOWN ================= */

function UserDropdown({ user, onLogout }: { user: User; onLogout:()=> void}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarFallback>
              {user.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem asChild>
          <Link href="/profile">Profile</Link>
        </DropdownMenuItem>

        {user.role === "CUSTOMER" && (
          <>
            <DropdownMenuItem asChild>
              <Link href="/cart">Cart</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/orders">My Orders</Link>
            </DropdownMenuItem>
          </>
        )}

        {user.role === "PROVIDER" && (
          <DropdownMenuItem asChild>
            <Link href="/provider/dashboard">Provider Dashboard</Link>
          </DropdownMenuItem>
        )}

        {user.role === "ADMIN" && (
          <DropdownMenuItem asChild>
            <Link href="/admin">Admin Dashboard</Link>
          </DropdownMenuItem>
        )}

        <DropdownMenuItem asChild>
  <button
    onClick={onLogout}
    className="w-full text-left text-red-500"
  >
    Logout
  </button>
</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}