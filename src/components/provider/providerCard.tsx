import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"

export default function ProviderCard({ provider }: { provider: any }) {
  return (
    <Card className="rounded-xl hover:shadow-lg transition">
      <CardContent className="p-5 space-y-3">
        {/* Restaurant Name */}
        <h3 className="text-lg font-semibold truncate">
          {provider.resturentName}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <MapPin className="h-4 w-4" />
          <span>{provider.location}</span>
        </div>

        {/* Cuisine Types */}
        <div className="flex flex-wrap gap-2">
          {provider.cuisineTypes?.map((cuisine: string) => (
            <Badge
              key={cuisine}
              variant="secondary"
              className="capitalize"
            >
              {cuisine}
            </Badge>
          ))}
        </div>

        {/* Provider Info */}
        <p className="text-sm text-gray-500">
          By <span className="font-medium">{provider.user?.name}</span>
        </p>

        {/* Status */}
        {provider.isApproved && (
          <span className="inline-block text-xs font-medium text-green-600">
            ✔ Verified Restaurant
          </span>
        )}
      </CardContent>
    </Card>
  )
}