"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { mealSchema, MealInput } from "@/schemas/meal.schema"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { providerMealService } from "@/services/Provider/providerMealService"

export default function AddMealForm({ refresh }: any) {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<MealInput>({
    resolver: zodResolver(mealSchema),
  })

  const onSubmit = async (data: MealInput) => {
    try {
      await providerMealService.createMeal(data)

      toast.success("Meal added successfully")

      reset()
      refresh()

    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 border p-6 rounded-xl bg-white shadow"
    >
      <h2 className="text-lg font-semibold">
        Add Meal
      </h2>

      <Input placeholder="Meal Name" {...register("name")} />
      <p className="text-red-500 text-sm">{errors.name?.message}</p>

      <Input
        placeholder="Description"
        {...register("description")}
      />
      <p className="text-red-500 text-sm">
        {errors.description?.message}
      </p>

      <Input
        type="number"
        placeholder="Price"
        {...register("price", { valueAsNumber: true })}
      />
      <p className="text-red-500 text-sm">
        {errors.price?.message}
      </p>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? "Adding..." : "Add Meal"}
      </Button>
    </form>
  )
}