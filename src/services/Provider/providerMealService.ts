export const providerMealService = {

  async getMeals() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider/meal`,
      {
        credentials: "include",
        cache: "no-store",
      }
    )

    const result = await res.json()
    return result.data
  },

  async createMeal(payload: any) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider/meal`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(payload),
      }
    )

    if (!res.ok) throw new Error("Failed to create meal")

    return res.json()
  },

  async updateMeal(id: string, payload: any) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider/meal/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(payload),
      }
    )

    if (!res.ok) throw new Error("Failed to update meal")

    return res.json()
  },

  async deleteMeal(id: string) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/provider/meal/${id}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    )

    if (!res.ok) throw new Error("Failed to delete meal")

    return res.json()
  },
}