"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { customerService } from "@/services/customer/customersevice"


export default function CustomerTable({
  customers,
  setCustomers,
}: {
  customers: any[]
  setCustomers: any
}) {
  const handleStatusChange = async (user: any) => {
    const newStatus = user.status === "ACTIVE" ? "SUSPENDED" : "ACTIVE"

    try {
      await customerService.updateUserStatus(user.id, newStatus)

      setCustomers((prev: any[]) =>
        prev.map((u) =>
          u.id === user.id ? { ...u, status: newStatus } : u
        )
      )

      toast.success(`User status updated to ${newStatus}`)
    } catch (error) {
      toast.error("Failed to update user status")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Customers</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b">
              <tr>
                <th className="text-left py-2">Name</th>
                <th className="text-left py-2">Email</th>
                <th className="text-left py-2">Status</th>
                <th className="text-left px-8">Action</th>
              </tr>
            </thead>

            <tbody>
              {customers.map((user) => (
                <tr key={user.id} className="border-b ">
                  <td className="py-2">{user.name}</td>
                  <td >{user.email}</td>

                  <td className="">
                    {user.status === "ACTIVE" ? (
                      <span className="text-green-600 font-medium">
                        ACTIVE
                      </span>
                    ) : (
                      <span className="text-red-500 font-medium">
                         SUSPENDED
                      </span>
                    )}
                  </td>

                  <td>
                    <Button
                      size="sm"
                      variant={
                        user.status === "ACTIVE"
                          ? "destructive"
                          : "default"
                      }
                      onClick={() => handleStatusChange(user)}
                    >
                      {user.status === "ACTIVE"
                        ? " SUSPENDED"
                        : "ACTIVE"}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}