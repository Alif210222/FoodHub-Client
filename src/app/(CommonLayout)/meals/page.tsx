"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { mealService } from "@/services/meals/meals"

import AllMeals from "@/components/meals/allMeals"



export default function HomeMeals() {
  const [meals, setMeals] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadMeals = async () => {
      try {
        const data = await mealService.getPublicMeals()
        setMeals(data.slice(0, 6)) // ✅ max 6 cards
      } finally {
        setLoading(false)
      }
    }

    loadMeals()
  }, [])

  if (loading) return null

  return (
    <section className="py-12 mt-15">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">🍽️ Popular Meals</h2>

         
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {meals.map((meal) => (
            <AllMeals key={meal.id} meal={meal} />
          ))}
        </div>
   
         
      </div>

     
    </section>
  )
}