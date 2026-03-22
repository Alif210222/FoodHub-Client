"use client";

import ProviderStats from "@/components/provider/providerDashboard/providerStats";
import { orderService } from "@/services/order/orderService";
import { useEffect, useState } from "react";

export default function ProviderDashboardPage() {
  const [orders, setOrders] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const res = await orderService.getProviderStats();
         console.log(res.data);

        setOrders(res.data); // ✅ FIXED
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadStats();
  }, []);

  if (loading) {
    return <div className="p-6">Loading dashboard...</div>;
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Provider Dashboard</h1>

      <ProviderStats orders={orders} />
    </div>
  );
}