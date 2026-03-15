"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


export default function OrderTable({ orders }: { orders: any[] }) {
    console.log(orders);
 



  return (
    <Card>
      <CardHeader>
        <CardTitle>All Orders</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b">
              <tr>
                <th className="text-left py-2">Order ID</th>
                
                <th className="text-left py-2">Provider</th>
                <th className="text-left py-2">Total</th>
                <th className="text-left py-2">Status</th>
                <th className="text-left py-2">Date</th>
              
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b hover:bg-zinc-50"
                >
                  <td className="py-2 text-xs">{order.id}</td>

                  

                  <td>{order.providerId|| "N/A"}</td>

                  <td className="font-medium">
                    ৳{order.totalAmount}
                  </td>

                  <td>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium
                        ${
                          order.status === "PENDING"
                            ? "bg-yellow-100 text-yellow-700"
                            : ""
                        }
                        ${
                          order.status === "CONFIRMED"
                            ? "bg-blue-100 text-blue-700"
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

                  <td>
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>

                 
                </tr>
              ))}
            </tbody>
          </table>

          {orders.length === 0 && (
            <div className="text-center py-6 text-gray-500">
              No orders found
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}