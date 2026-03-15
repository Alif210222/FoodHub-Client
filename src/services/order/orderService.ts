

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



   async createOrder(payload: any) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/order`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // send cookie token
        credentials: "include", 
        body: JSON.stringify(payload),
      }
    )

    if (!res.ok) {
      const error = await res.json()
      throw new Error(error.message || "Failed to create order")
    }

    return res.json()
  },

  // get all order for admin 
  async getAllOrders() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/order/admin`,
      {
        cache: "no-store",
        credentials: "include",
      }
    )

    if (!res.ok) {
      throw new Error("Failed to fetch orders")
    }

    const result = await res.json()
    return result.data
  },


}



