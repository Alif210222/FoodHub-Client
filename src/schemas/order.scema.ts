import { z } from "zod"

export const createOrderSchema = z.object({
  deliveryAddress: z
    .string()
    .min(5, "Delivery address is required"),

  quantity: z
    .number()
    .min(1, "Quantity must be at least 1"),
})

export type CreateOrderInput = z.infer<typeof createOrderSchema>