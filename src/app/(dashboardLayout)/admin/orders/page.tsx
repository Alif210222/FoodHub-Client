"use client"

import { useEffect, useState } from "react"
import { orderService } from "@/services/order/orderService"
import OrderTable from "@/components/admin/orders/OrderTable"

export default function AdminOrderPage() {
  const [orders, setOrders] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const data = await orderService.getAllOrders()
        setOrders(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    loadOrders()
  }, [])

  if (loading) {
    return (
      <div className="p-6 text-center">
        Loading orders...
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-bold">
        Order Management
      </h1>

      <OrderTable orders={orders} />

    </div>
  )
}