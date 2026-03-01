"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { orderService } from "@/services/order/orderService"
import OrderDetailsCard from "@/components/order/orderDetailsCard"


export default function OrderDetailsPage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()

  const [order, setOrder] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const loadOrder = async () => {
      try {
        const data = await orderService.getOrderById(id)
        setOrder(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadOrder()
  }, [id])

  if (loading) return <div className="p-6">Loading order details...</div>
  if (error) return <div className="p-6 text-red-500">{error}</div>

  return (
    <div className="p-6 space-y-6">
      <button
        onClick={() => router.back()}
        className="text-sm text-blue-600 hover:underline"
      >
        ← Back to orders
      </button>

      <OrderDetailsCard order={order} />
    </div>
  )
}