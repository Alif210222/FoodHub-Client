"use client";

export default function ProviderStats({ orders }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      
      <div className="bg-white shadow-lg rounded-2xl p-5 border">
        <h3>Total Orders</h3>
        <p className="text-3xl font-bold text-blue-600">
          {orders?.totalOrders}
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-5 border">
        <h3>Pending</h3>
        <p className="text-3xl font-bold text-yellow-500">
          {orders?.pendingOrders}
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-5 border">
        <h3>Delivered</h3>
        <p className="text-3xl font-bold text-green-600">
          {orders?.deliveredOrders}
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-5 border">
        <h3>Revenue</h3>
        <p className="text-3xl font-bold text-purple-600">
          ৳ {orders?.totalRevenue}
        </p>
      </div>
    </div>
  );
}