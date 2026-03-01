"use client"

import { ReactNode, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import DashboardSidebar from "@/components/dashboard/DashboardSidebar"
import DashboardNavbar from "@/components/dashboard/DashboardNavbar"
import { getUser } from "@/services/auth"

type UserRole = "PROVIDER" | "ADMIN"

interface User {
  name: string
  role: UserRole
}

export default function DashboardLayout({
  children,
}: {
  children: ReactNode
}) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await getUser()

        if (!data || !["ADMIN", "PROVIDER"].includes(data.role)) {
          router.replace("/login")
          return
        }

        setUser(data)
      } catch {
        router.replace("/login")
      } finally {
        setLoading(false)
      }
    }

    loadUser()
  }, [router])

  if (loading) return null

  return (
    <div className="h-screen flex flex-col">
      <DashboardNavbar user={user!} />

      <div className="flex flex-1 overflow-hidden">
        <DashboardSidebar role={user!.role} />

        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}