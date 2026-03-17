import { z } from "zod"

export const mealSchema = z.object({
  name: z.string().min(2, "Meal name required"),
  description: z.string().min(5, "Description required"),
  price: z.number().min(1, "Price must be greater than 0"),
})

export type MealInput = z.infer<typeof mealSchema>