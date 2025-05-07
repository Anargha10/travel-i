"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Search, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function DestinationPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const destinations = [
    {
      id: 1,
      name: "Paris",
      country: "France",
      image: "/paris.jpg?height=200&width=300",
      description: "The City of Light",
    },
    {
      id: 2,
      name: "Tokyo",
      country: "Japan",
      image: "/japan.jpg?height=200&width=300",
      description: "Modern meets traditional",
    },
    {
      id: 3,
      name: "New York",
      country: "USA",
      image: "/us.jpg?height=200&width=300",
      description: "The city that never sleeps",
    },
    {
      id: 4,
      name: "Bali",
      country: "Indonesia",
      image: "/bli.jpg?height=200&width=300",
      description: "Island paradise",
    },
  ]

  const handleSelectDestination = (id: number) => {
    router.push("/preferences")
  }

  return (
    <div className="min-h-screen bg-black pb-20 text-white">
      <div className="mx-auto max-w-md px-4">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-black py-4">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" onClick={() => router.back()}>
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <h1 className="ml-2 text-xl font-bold">Choose Destination</h1>
          </div>

          {/* Search */}
          <div className="mt-4 relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search destinations"
              className="border-0 bg-gray-800 pl-10 text-white placeholder:text-gray-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Popular Destinations */}
        <div className="mt-6">
          <h2 className="mb-4 text-lg font-semibold">Popular Destinations</h2>
          <div className="grid grid-cols-2 gap-4">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="cursor-pointer overflow-hidden rounded-lg bg-gray-800"
                onClick={() => handleSelectDestination(destination.id)}
              >
                <div className="relative h-32 w-full">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-medium">{destination.name}</h3>
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin className="mr-1 h-3 w-3" />
                    {destination.country}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended for You */}
        <div className="mt-8">
          <h2 className="mb-4 text-lg font-semibold">Recommended for You</h2>
          <div className="space-y-4">
            {destinations.slice(0, 2).map((destination) => (
              <div
                key={destination.id}
                className="cursor-pointer overflow-hidden rounded-lg bg-gray-800"
                onClick={() => handleSelectDestination(destination.id)}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-lg font-medium">{destination.name}</h3>
                    <div className="flex items-center text-sm text-gray-300">
                      <MapPin className="mr-1 h-3 w-3" />
                      {destination.country}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
