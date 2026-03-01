

export const mealService = {
  async getPublicMeals() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/provider/meal`, {
      method: "GET",
      cache: "no-store", // public but always fresh
    })

    if (!res.ok) {
      throw new Error("Failed to fetch meals")
    }

    const result = await res.json()
    return result.data
  },
}