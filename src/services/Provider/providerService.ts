export const providerService = {
    
  async getAllProviders() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/provider`,
      {
        cache: "no-store",
      }
    )

    if (!res.ok) {
      throw new Error("Failed to fetch providers")
    }

    const result = await res.json()
    return result.data
  },
}