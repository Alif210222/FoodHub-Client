"use client"

import ProviderCard from "@/components/provider/providerCard"
import { providerService } from "@/services/Provider/providerService"
import { useEffect, useState } from "react"


export default function HomeProviders() {
  const [providers, setProviders] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProviders = async () => {
      try {
        const res = await providerService.getAllProviders()
        setProviders(res)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    loadProviders()
  }, [])

  if (loading) {
    return <div className="p-6 text-gray-500">Loading providers...</div>
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 space-y-6">
      {/* Section Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">
          Popular Restaurants
        </h2>
        <p className="text-gray-500">
          Choose from trusted food providers near you
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {providers.map((provider) => (
          <ProviderCard
            key={provider.id}
            provider={provider}
          />
        ))}
      </div>
    </section>
  )
}