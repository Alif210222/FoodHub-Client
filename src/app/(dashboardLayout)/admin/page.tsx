"use client"

import { useEffect, useState } from "react"
import AdminStats from "@/components/admin/dashboard/AdminStats"

import { orderService } from "@/services/order/orderService"
import { mealService } from "@/services/meals/meals"
import { providerService } from "@/services/Provider/providerService"
import { customerService } from "@/services/customer/customersevice"

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    users: 0,
    providers: 0,
    orders: 0,
    meals: 0,
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadStats = async () => {
      try {
        const users = await customerService.getAllCustomers()
        const providers = await providerService.getAllProviders()
        const orders = await orderService.getAllOrders()
        const meals = await mealService.getPublicMeals()

        setStats({
          users: users.length,
          providers: providers.length,
          orders: orders.length,
          meals: meals.length,
        })
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    loadStats()
  }, [])

  if (loading) {
    return <div className="p-6">Loading dashboard...</div>
  }

  return (
    <div className="p-6 space-y-8">

      <h1 className="text-2xl font-bold">
        Admin Dashboard
      </h1>

      <AdminStats stats={stats} />

    </div>
  )
}