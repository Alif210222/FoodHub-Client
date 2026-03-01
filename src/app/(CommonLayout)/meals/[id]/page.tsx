"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import MealDetailsCard from "@/components/meals/mealDetailsCard"
import { mealService } from "@/services/meals/meals"

export default function MealDetailsPage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()

  const [meal, setMeal] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const loadMeal = async () => {
      try {
        const data = await mealService.getMealsById(id)
        setMeal(data)
      } catch (err: any) {
        setError(err.message || "Failed to load meal")
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      loadMeal()
    }
  }, [id])

  if (loading) return <div className="p-6">Loading meal details...</div>
  if (error) return <div className="p-6 text-red-500">{error}</div>

  return (
    <div className="p-6 space-y-6 min-h-screen bg-zinc-50 dark:bg-black">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="text-sm text-blue-600 hover:underline"
      >
        ← Back to meals
      </button>

      {/* Meal Details */}
      <MealDetailsCard meal={meal} />
    </div>
  )
}