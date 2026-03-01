"use client"

import OrderCard from "@/components/order/orderCard"
import { orderService } from "@/services/order/orderService"
import { useEffect, useState } from "react"



export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const data = await orderService.getMyOrders()
        
        setOrders(Array.isArray(data) ? data : [data])
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadOrders()
  }, [])

  if (loading) {
    return <div className="p-6">Loading orders...</div>
  }

  if (error) {
    return <div className="p-6 text-red-500">{error}</div>
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">📦 My Orders</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  )
}