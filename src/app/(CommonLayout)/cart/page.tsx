"use client"

import { useEffect, useState } from "react"
import { getCart, removeFromCart, updateQuantity } from "@/utils/cart"

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([])

  useEffect(() => {
    setCart(getCart())
  }, [])

  const handleRemove = (id: string) => {
    removeFromCart(id)
    setCart(getCart())
  }

  const handleQuantity = (id: string, qty: number) => {
    updateQuantity(id, qty)
    setCart(getCart())
  }

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">My Cart 🛒</h1>

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border p-4 rounded-lg"
        >
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            <p>৳ {item.price}</p>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="number"
              value={item.quantity}
              min={1}
              className="w-16 border rounded px-2"
              onChange={(e) =>
                handleQuantity(item.id, Number(e.target.value))
              }
            />

            <button
              onClick={() => handleRemove(item.id)}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="text-right font-bold text-lg">
        Total: ৳ {total}
      </div>
    </div>
  )
}