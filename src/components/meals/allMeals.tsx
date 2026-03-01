import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function AllMeals({ meal }: { meal: any }) {
  return (
    <Card className="rounded-xl hover:shadow-md transition">
      {/* Image */}
      {/* <div className="h-40 bg-gray-100 rounded-t-xl flex items-center justify-center text-gray-400">
        {meal.image ? (
         <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="Delicious food"
            className="w-full max-w-md mx-auto rounded-3xl shadow-xl"
          />
        ) : (
          <span>No Image</span>
        )}
      </div> */}

      <CardContent className="p-4 space-y-2">
        {/* Meal name */}
        <h3 className="font-semibold text-lg truncate">
          {meal.name}
        </h3>

        {/* Restaurant */}
        <p className="text-sm text-gray-500 truncate">
          {meal.provider?.resturentName}
        </p>

        {/* Price + availability */}
        <div className="flex items-center justify-between pt-2">
          <span className="font-bold text-green-600">
            ৳{meal.price}
          </span>

          {meal.isAvailable ? (
            <span className="text-xs text-green-600">
              Available
            </span>
          ) : (
            <span className="text-xs text-red-500">
              Unavailable
            </span>
          )}
        </div>

        
      </CardContent>
      <Link
            href={`/meals/${meal.id}`}
            className="text-sm text-blue-600 hover:underline ml-6"
           >
            View Details →
          </Link>
    </Card>
  )
}