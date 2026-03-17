"use client"

import { useForm } from "react-hook-form"
import { mealSchema, MealInput } from "@/schemas/meal.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { providerMealService } from "@/services/Provider/providerMealService"

export default function EditMealModal({
  meal,
  close,
  refresh,
}: any) {

  const { register, handleSubmit } = useForm<MealInput>({
    resolver: zodResolver(mealSchema),
    defaultValues: meal,
  })

  const onSubmit = async (data: MealInput) => {
    try {
      await providerMealService.updateMeal(meal.id, data)

      toast.success("Meal updated")

      refresh()
      close()

    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">

      <div className="bg-white p-6 rounded-xl w-full max-w-md space-y-4">

        <h2 className="text-lg font-semibold">
          Edit Meal
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">

          <Input {...register("name")} />

          <Input {...register("description")} />

          <Input
            type="number"
            {...register("price", { valueAsNumber: true })}
          />

          <div className="flex gap-3">
            <Button type="submit">Update</Button>

            <Button
              type="button"
              variant="outline"
              onClick={close}
            >
              Cancel
            </Button>
          </div>

        </form>

      </div>

    </div>
  )
}