"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

import { mealService } from "@/services/meals/meals"
import CreateOrderForm from "@/components/order/CeateOrderForm"

export default function CreateOrderPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const mealId = searchParams.get("mealId") // ✅ CORRECT
  const [meal, setMeal] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!mealId) return

    const loadMeal = async () => {
      try {
        const data = await mealService.getMealsById(mealId)
        setMeal(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    loadMeal()
  }, [mealId])

  if (loading) return <div className="p-6">Loading...</div>

  if (!meal)
    return <div className="p-6 text-red-500">Meal not found</div>

  return (
    <div className="min-h-screen bg-zinc-50 p-6 flex justify-center">
      <div className="w-full max-w-md space-y-6">
        <button
          onClick={() => router.back()}
          className="text-sm text-blue-600 hover:underline"
        >
          ← Back
        </button>

        <CreateOrderForm meal={meal} />
      </div>
    </div>
  )
}