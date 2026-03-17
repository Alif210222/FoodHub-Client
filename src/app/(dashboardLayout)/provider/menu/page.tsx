"use client"

import { useEffect, useState } from "react"
import AddMealForm from "@/components/provider/meals/AddMealForm"
import MealTable from "@/components/provider/meals/MealTable"
import { providerMealService } from "@/services/Provider/providerMealService"

export default function ManageMealsPage() {

  const [meals, setMeals] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const loadMeals = async () => {
    const data = await providerMealService.getMeals()
    setMeals(data)
    setLoading(false)
  }

  useEffect(() => {
    loadMeals()
  }, [])

  if (loading) return <div className="p-6">Loading...</div>

  return (
    <div className="p-6 space-y-8">

      <h1 className="text-2xl font-bold">
        Manage Meals
      </h1>

      <div className="grid lg:grid-cols-3 gap-6">

        <AddMealForm refresh={loadMeals} />

        <div className="lg:col-span-2">
          <MealTable meals={meals} refresh={loadMeals} />
        </div>

      </div>

    </div>
  )
}