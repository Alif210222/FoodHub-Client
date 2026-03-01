import { ShoppingCart, MapPin, Utensils } from "lucide-react"

const steps = [
  {
    icon: <Utensils className="h-8 w-8 text-orange-500" />,
    title: "Choose Meals",
    description:
      "Browse meals from verified restaurants near you.",
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-orange-500" />,
    title: "Place Order",
    description:
      "Add your favorite meals and place your order easily.",
  },
  {
    icon: <MapPin className="h-8 w-8 text-orange-500" />,
    title: "Fast Delivery",
    description:
      "Get fresh food delivered to your doorstep.",
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">
            How FoodHub Works
          </h2>
          <p className="text-gray-500">
            Order food in just 3 simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-xl border bg-zinc-50 p-6 text-center hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}