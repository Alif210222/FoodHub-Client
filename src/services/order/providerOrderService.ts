export const providerOrderService = {
  async getProviderOrders() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/order/provider`,
      {
        credentials: "include",
        cache: "no-store",
      }
    )

    if (!res.ok) {
      throw new Error("Failed to fetch orders")
    }

    const result = await res.json()
    return result.data
  },

  async updateOrderStatus(id: string, status: string) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/order/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ status }),
      }
    )

    if (!res.ok) {
      throw new Error("Failed to update order")
    }

    return res.json()
  },
}