"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminStats({stats}: {stats: {
    users: number
    providers: number
    orders: number
    meals: number
  }}) {


console.log(stats);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Users */}
      <Card className="hover:shadow-lg transition">
        <CardHeader>
          <CardTitle>Total Users</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-3xl font-bold text-blue-600">
            {stats.users}
          </p>
        </CardContent>
      </Card>

      {/* Providers */}
      <Card className="hover:shadow-lg transition">
        <CardHeader>
          <CardTitle>Total Providers</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-3xl font-bold text-purple-600">
            {stats.providers}
          </p>
        </CardContent>
      </Card>

      {/* Orders */}
      <Card className="hover:shadow-lg transition">
        <CardHeader>
          <CardTitle>Total Orders</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-3xl font-bold text-green-600">
            {stats.orders}
          </p>
        </CardContent>
      </Card>

      {/* Meals */}
      <Card className="hover:shadow-lg transition">
        <CardHeader>
          <CardTitle>Total Meals</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-3xl font-bold text-orange-600">
            {stats.meals}
          </p>
        </CardContent>
      </Card>

    </div>
  )
}