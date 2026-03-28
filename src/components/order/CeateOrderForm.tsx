"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

import { orderService } from "@/services/order/orderService"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CreateOrderInput, createOrderSchema } from "@/schemas/order.scema"
import { request } from "http"

export default function CreateOrderForm({
  meal,
}: {
  meal: any
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateOrderInput>({
    resolver: zodResolver(createOrderSchema),
    defaultValues: {
      quantity: 1,
    },
  })

  const onSubmit = async (data: CreateOrderInput) => {
    try {
      const payload = {
        providerId: meal.providerId,
        deliveryAddress: data.deliveryAddress,
        items: [
          {
            mealId: meal.id,
            quantity: data.quantity,
          },
        ],
      }

      await orderService.createOrder(payload)

      toast.success("Order placed successfully ")
    } catch (err: unknown) {
      if (err instanceof Error) {
         toast.error(err.message)
       } else {
         toast.error("Something went wrong")
       }
         }
  }



  console.log (meal)
  // console.log(request.user);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-xl border bg-white p-6 shadow-sm"
    >
      {/* Meal Info */}
      <div>
        <h2 className="text-lg font-semibold">{meal.name}</h2>
        <p className="text-sm text-gray-500">
          ৳{meal.price} / item
        </p>
      </div>

      {/* Quantity */}
      <div>
        <label className="text-sm font-medium">Quantity</label>
        <Input
          type="number"
          min={1}
          {...register("quantity", { valueAsNumber: true })}
        />
        {errors.quantity && (
          <p className="text-sm text-red-500">
            {errors.quantity.message}
          </p>
        )}
      </div>

      {/* Address */}
      <div>
        <label className="text-sm font-medium">
          Delivery Address
        </label>
        <Input {...register("deliveryAddress")} />
        {errors.deliveryAddress && (
          <p className="text-sm text-red-500">
            {errors.deliveryAddress.message}
          </p>
        )}
      </div>

      {/* Total */}
      <div className="text-right font-semibold">
        Total: ৳{meal.price}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? "Placing Order..." : "Place Order"}
      </Button>
    </form>
  )
}