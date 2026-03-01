

export const orderService = {
  async getMyOrders() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/order`, {
      method: "GET",
      credentials: "include", // important for auth cookie
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!res.ok) {
      throw new Error("Failed to fetch orders")
    }

    const result = await res.json()
    return result.data // backend sends { data: {...} }
  },




async getOrderById(id: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/order/${id}`, {
      credentials: "include",
    })

    if (!res.ok) {
      throw new Error("Failed to fetch order details")
    }

    const result = await res.json()
    return result.data
  },
}