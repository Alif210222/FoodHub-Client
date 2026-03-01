import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function OrderDetailsCard({ order }: { order: any }) {
  return (
    <Card className="max-w-3xl mx-auto rounded-xl shadow-sm">
      <CardHeader className="space-y-1">
        <h2 className="text-xl font-bold">Order Details</h2>
        <p className="text-sm text-gray-500 break-all">
          Order ID: {order.id}
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Status */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Status</span>
          <Badge>{order.status}</Badge>
        </div>

        {/* Address */}
        <div>
          <p className="text-sm text-gray-500">Delivery Address</p>
          <p className="font-medium">{order.deliveryAddress}</p>
        </div>

        {/* Items */}
        <div>
          <p className="text-sm text-gray-500 mb-3">Ordered Items</p>

          <div className="space-y-3">
            {order.items.map((item: any) => (
              <div
                key={item.id}
                className="flex justify-between border rounded-lg p-3 text-sm"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                </div>

                <p className="font-semibold">
                  ৳{item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between">
            <span>Total Amount</span>
            <span className="font-bold">৳{order.totalAmount}</span>
          </div>

          <div className="text-sm text-gray-500">
            Payment Method: {order.paymentMethod}
          </div>

          <div className="text-xs text-gray-400">
            Ordered at:{" "}
            {new Date(order.createdAt).toLocaleString()}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}