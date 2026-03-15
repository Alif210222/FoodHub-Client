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
}