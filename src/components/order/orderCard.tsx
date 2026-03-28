import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

export default function OrderCard({ order }: { order: any }) {
  return (
    <Card className="rounded-xl shadow-sm">
      <CardHeader className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        
        <div className="min-w-0">
          <p className="text-xs sm:text-sm text-gray-500">Order ID</p>
          <p className="font-medium text-sm sm:text-base truncate">
            {order.id}
          </p>
        </div>

        <Badge
          className="w-fit"
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
          <p className="text-xs sm:text-sm text-gray-500">
            Delivery Address
          </p>
          <p className="font-medium text-sm sm:text-base break-words">
            {order.deliveryAddress}
          </p>
        </div>

        {/* Items */}
        <div>
          <p className="text-xs sm:text-sm text-gray-500 mb-2">Items</p>
          <div className="space-y-2">
            {order.items.map((item: any) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:justify-between gap-1 text-sm"
              >
                <span className="break-words">
                  {item.name} × {item.quantity}
                </span>
                <span className="font-medium">
                  ৳{item.price * item.quantity}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between border-t pt-3 font-semibold text-sm sm:text-base">
          <span>Total</span>
          <span>৳{order.totalAmount}</span>
        </div>

        {/* Meta */}
        <div className="text-xs sm:text-sm text-gray-500 leading-relaxed">
          Payment: {order.paymentMethod} <br />
          Ordered at:{" "}
          {new Date(order.createdAt).toLocaleString()}
        </div>

        {/* Link */}
        <Link
          href={`/orders/${order.id}`}
          className="inline-block text-sm text-blue-600 hover:underline pt-2"
        >
          View Details →
        </Link>
      </CardContent>
    </Card>
  );
}