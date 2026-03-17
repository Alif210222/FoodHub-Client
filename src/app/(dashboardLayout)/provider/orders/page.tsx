"use client"

import { useEffect, useState } from "react"
import ProviderOrderTable from "@/components/provider/orders/ProviderOrderTable"
import { providerOrderService } from "@/services/order/providerOrderService"

export default function ProviderOrdersPage() {

  const [orders, setOrders] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const loadOrders = async () => {
    try {
      const data =
        await providerOrderService.getProviderOrders()

      setOrders(data)

    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }


  console.log(orders);

  useEffect(() => {
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
        Orders For Your Meals
      </h1>

      <ProviderOrderTable
        orders={orders}
        refresh={loadOrders}
      />

    </div>
  )
}