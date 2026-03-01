import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Link from "next/link"

export default function OrderCard({ order }: { order: any }) {
  return (
    <Card className="rounded-xl shadow-sm">
      <CardHeader className="flex flex-row justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">Order ID</p>
          <p className="font-medium truncate">{order.id}</p>
        </div>

        <Badge
          variant={
            order.status === "PENDING"
              ? "secondary"
              : order.status === "DELIVERED"
              ? "default"
              : "destructive"
          }
        >
          {order.status}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Address */}
        <div>
          <p className="text-sm text-gray-500">Delivery Address</p>
          <p className="font-medium">{order.deliveryAddress}</p>
        </div>

        {/* Items */}
        <div>
          <p className="text-sm text-gray-500 mb-2">Items</p>
          <div className="space-y-2">
            {order.items.map((item: any) => (
              <div
                key={item.id}
                className="flex justify-between text-sm"
              >
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>৳{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between border-t pt-3 font-semibold">
          <span>Total</span>
          <span>৳{order.totalAmount}</span>
        </div>

        <div className="text-xs text-gray-500">
          Payment: {order.paymentMethod} <br />
          Ordered at: {new Date(order.createdAt).toLocaleString()}
        </div>

        <Link
            href={`/orders/${order.id}`}
            className="text-sm text-blue-600 hover:underline"
           >
            View Details →
          </Link>


      </CardContent>
    </Card>
  )
}