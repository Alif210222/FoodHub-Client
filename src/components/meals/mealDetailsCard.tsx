import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { addToCart } from "@/utils/cart"
import { toast } from "sonner"

export default function MealDetailsCard({ meal }: { meal: any }) {
  return (
    <Card className="max-w-4xl mx-auto rounded-2xl shadow-sm">
      {/* Image */}
      {/* <div className="h-72 bg-gray-100 rounded-t-2xl flex items-center justify-center overflow-hidden">
        {meal.image ? (
          <img
            src={meal.image}
            alt={meal.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-400 text-sm">No Image Available</span>
        )}
      </div> */}

      <CardContent className="p-6 space-y-6">
        {/* Title + Price */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold">{meal.name}</h1>
            <p className="text-gray-500 text-sm mt-1">
              {meal.provider?.resturentName} • {meal.provider?.location}
            </p>
          </div>

          <span className="text-2xl font-bold text-green-600">
            ৳{meal.price}
          </span>
        </div>

        {/* Availability */}
        {meal.isAvailable ? (
          <span className="inline-block text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">
            Available
          </span>
        ) : (
          <span className="inline-block text-sm text-red-600 bg-red-50 px-3 py-1 rounded-full">
            Unavailable
          </span>
        )}

        {/* Description */}
        <p className="text-gray-700 leading-relaxed">
          {meal.description}
        </p>

        {/* Cuisine Tags */}
        {meal.provider?.cuisineTypes?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {meal.provider.cuisineTypes.map((tag: string) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Reviews */}
        <div>
          <h3 className="font-semibold mb-2">Customer Reviews</h3>

          {meal.reviews?.length > 0 ? (
            <div className="space-y-3">
              {meal.reviews.map((review: any) => (
                <div
                  key={review.id}
                  className="border rounded-lg p-3 text-sm"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium">
                      {review.customer?.name}
                    </span>
                    <span className="text-yellow-500">
                      ⭐ {review.rating}/5
                    </span>
                  </div>
                  <p className="text-gray-600">
                    {review.comment}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-400">
              No reviews yet
            </p>
          )}
        </div>

        {/* Order Button */}

        <Link href={`/orders/create?mealId=${meal.id}`}>
          <Button
            className="w-full mt-4"
            disabled={!meal.isAvailable}
          >
            Order This Meal
          </Button>
        </Link>

        <Button
        className="w-full mt-4"
          onClick={() => {
            addToCart(meal)
            toast.success("Added to cart 🛒")
          }}
        >
          Add to Cart
      </Button>
      </CardContent>
    </Card>
  )
}