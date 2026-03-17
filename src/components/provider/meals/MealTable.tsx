"use client"

import { useState } from "react"
import EditMealModal from "./EditMealModal"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { providerMealService } from "@/services/Provider/providerMealService"

export default function MealTable({ meals, refresh }: any) {

  const [editMeal, setEditMeal] = useState<any>(null)

  const handleDelete = async (id: string) => {

    try {
      await providerMealService.deleteMeal(id)

      toast.success("Meal deleted")

      refresh()

    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return (
    <div className="overflow-x-auto border rounded-xl">

      <table className="w-full text-sm">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {meals.map((meal: any) => (
            <tr key={meal.id} className="border-t">

              <td className="p-3">{meal.name}</td>
              <td>{meal.description}</td>
              <td>৳{meal.price}</td>

              <td className="flex gap-2 p-3">

                <Button
                  size="sm"
                  onClick={() => setEditMeal(meal)}
                >
                  Edit
                </Button>

                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(meal.id)}
                >
                  Delete
                </Button>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

      {editMeal && (
        <EditMealModal
          meal={editMeal}
          close={() => setEditMeal(null)}
          refresh={refresh}
        />
      )}

    </div>
  )
}