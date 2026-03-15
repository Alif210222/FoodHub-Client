export const customerService = {
  async getAllCustomers() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/alluser`,
      {
        cache: "no-store",
        credentials: "include",
      }
    )

    if (!res.ok) {
      throw new Error("Failed to fetch customers")
    }

    const result = await res.json()
    return result.data
  },

    async updateUserStatus(id: string, status: string) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/admin/${id}`,
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
      throw new Error("Failed to update user status")
    }

    return res.json()
  },
}