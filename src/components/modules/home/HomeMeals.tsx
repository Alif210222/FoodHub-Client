"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { mealService } from "@/services/meals/meals"
import MealCard from "./MealCard"


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
         <div className="text-center space-y-2 mb-6">
          <h2 className="text-3xl font-bold">
            Popular Meals
          </h2>
          <p className="text-gray-500">
           Please Order those  food  and enjoy delicious meals.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
    <Link
            href="/meals"
            className="text-lg font-medium  text-blue-600 hover:underline"
          >
            See more →
          </Link>
         
      </div>

     
    </section>
  )
}