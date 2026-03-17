"use client"

import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { providerOrderService } from "@/services/order/providerOrderService"

export default function ProviderOrderTable({
  orders,
  refresh,
}: any) {

    console.log(orders);

  const updateStatus = async (id: string, status: string) => {
    try {
      await providerOrderService.updateOrderStatus(id, status)

      toast.success(`Order marked ${status}`)

      refresh()

    } catch (error: any) {
      toast.error(error.message)
    }
  }





  return (
    <div className="overflow-x-auto border rounded-xl bg-white shadow">

      <table className="w-full text-sm">

        <thead className="bg-zinc-100">
          <tr>
            <th className="p-3 text-left">Order</th>
            <th className="p-3 text-left">Customer</th>
           
            <th className="p-3 text-left">Qty</th>
            <th className="p-3 text-left">Total</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>

          {orders.map((order: any) => (
            <tr key={order.id} className="border-t">

              <td className="p-3 text-xs">{order.id}</td>

              <td >{order.customer?.name}</td>

              

              <td >{order.items?.[0]?.quantity}</td>

              <td className="font-medium">
                ৳{order.totalAmount}
              </td>

              <td>
                <span className={`px-2 py-1 rounded text-xs font-medium ${ order.status === "PENDING"
                      ? "bg-yellow-100 text-yellow-700"
                      : ""
                  }
                  ${
                    order.status === "ACCEPTED"
                      ? "bg-blue-100 text-blue-700"
                      : ""
                  }
                  ${
                    order.status === "PREPARING"
                      ? "bg-purple-100 text-purple-700"
                      : ""
                  }
                  ${
                    order.status === "DELIVERED"
                      ? "bg-green-100 text-green-700"
                      : ""
                  }
                  ${
                    order.status === "CANCELLED"
                      ? "bg-red-100 text-red-700"
                      : ""
                  }
                `}
                >
                  {order.status}
                </span>
              </td>

              <td className="flex gap-2 p-3">

                {order.status === "PENDING" && (
                  <Button
                    size="sm"
                    onClick={() =>
                      updateStatus(order.id, "ACCEPTED")
                    }
                  >
                    Accept
                  </Button>
                )}

                {order.status === "ACCEPTED" && (
                  <Button
                    size="sm"
                    onClick={() =>
                      updateStatus(order.id, "PREPARING")
                    }
                  >
                    Preparing
                  </Button>
                )}

                {order.status === "PREPARING" && (
                  <Button
                    size="sm"
                    onClick={() =>
                      updateStatus(order.id, "DELIVERED")
                    }
                  >
                    Delivered
                  </Button>
                )}

                {order.status !== "DELIVERED" &&
                  order.status !== "CANCELLED" && (
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() =>
                        updateStatus(order.id, "CANCELLED")
                      }
                    >
                      Cancel
                    </Button>
                  )}

              </td>

            </tr>
          ))}

        </tbody>

      </table>

      {orders.length === 0 && (
        <div className="text-center py-6 text-gray-500">
          No orders yet
        </div>
      )}

    </div>
  )
}