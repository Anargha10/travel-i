"use client"

import { useState } from "react"
import { Search, Filter, MapPin, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("")

  const destinations = [
    {
      id: 1,
      name: "Paris",
      country: "France",
      image: "/paris.jpg?height=200&width=300",
      rating: 4.8,
      reviews: 1240,
      category: "popular",
    },
    {
      id: 2,
      name: "Bali",
      country: "Indonesia",
      image: "/bli.jpg?height=200&width=300",
      rating: 4.7,
      reviews: 980,
      category: "popular",
    },
    {
      id: 3,
      name: "Santorini",
      country: "Greece",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.9,
      reviews: 1120,
      category: "trending",
    },
    {
      id: 4,
      name: "Kyoto",
      country: "Japan",
      image: "/japan.jpg?height=200&width=300",
      rating: 4.6,
      reviews: 890,
      category: "trending",
    },
    {
      id: 5,
      name: "New York",
      country: "USA",
      image: "/us.jpg?height=200&width=300",
      rating: 4.5,
      reviews: 2100,
      category: "popular",
    },
    {
      id: 6,
      name: "Maldives",
      country: "Maldives",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.9,
      reviews: 760,
      category: "trending",
    },
  ]

  return (
    <div className="min-h-screen bg-black pb-20 text-white">
      <div className="mx-auto max-w-md px-4">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-black py-4">
          <h1 className="text-xl font-bold">Explore</h1>

          {/* Search */}
          <div className="mt-4 flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search destinations"
                className="border-0 bg-gray-800 pl-10 text-white placeholder:text-gray-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon" className="border-0 bg-gray-800 hover:bg-gray-700">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="popular" className="mt-6 w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-900">
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="recommended">For You</TabsTrigger>
          </TabsList>

          <TabsContent value="popular" className="mt-4">
            <div className="grid grid-cols-2 gap-4">
              {destinations
                .filter((dest) => dest.category === "popular")
                .map((destination) => (
                  <div key={destination.id} className="overflow-hidden rounded-lg bg-gray-800">
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
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-400">
                          <MapPin className="mr-1 h-3 w-3" />
                          {destination.country}
                        </div>
                        <div className="flex items-center text-sm">
                          <Star className="mr-1 h-3 w-3 fill-yellow-500 text-yellow-500" />
                          {destination.rating}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="trending" className="mt-4">
            <div className="grid grid-cols-2 gap-4">
              {destinations
                .filter((dest) => dest.category === "trending")
                .map((destination) => (
                  <div key={destination.id} className="overflow-hidden rounded-lg bg-gray-800">
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
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-400">
                          <MapPin className="mr-1 h-3 w-3" />
                          {destination.country}
                        </div>
                        <div className="flex items-center text-sm">
                          <Star className="mr-1 h-3 w-3 fill-yellow-500 text-yellow-500" />
                          {destination.rating}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="recommended" className="mt-4">
            <div className="grid grid-cols-2 gap-4">
              {destinations.slice(0, 4).map((destination) => (
                <div key={destination.id} className="overflow-hidden rounded-lg bg-gray-800">
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
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-400">
                        <MapPin className="mr-1 h-3 w-3" />
                        {destination.country}
                      </div>
                      <div className="flex items-center text-sm">
                        <Star className="mr-1 h-3 w-3 fill-yellow-500 text-yellow-500" />
                        {destination.rating}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Featured Experiences */}
        <div className="mt-8">
          <h2 className="mb-4 text-lg font-semibold">Featured Experiences</h2>
          <div className="space-y-4">
            {[
              {
                title: "Eiffel Tower Skip-the-Line Tour",
                location: "Paris, France",
                image: "/placeholder.svg?height=200&width=400",
                price: 89,
                rating: 4.8,
                reviews: 320,
              },
              {
                title: "Louvre Museum Guided Tour",
                location: "Paris, France",
                image: "/placeholder.svg?height=200&width=400",
                price: 65,
                rating: 4.7,
                reviews: 280,
              },
            ].map((experience, index) => (
              <div key={index} className="overflow-hidden rounded-lg bg-gray-800">
                <div className="relative h-40 w-full">
                  <Image
                    src={experience.image || "/placeholder.svg"}
                    alt={experience.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{experience.title}</h3>
                  <div className="mt-1 flex items-center text-sm text-gray-400">
                    <MapPin className="mr-1 h-3 w-3" />
                    {experience.location}
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center text-sm">
                      <Star className="mr-1 h-3 w-3 fill-yellow-500 text-yellow-500" />
                      <span>{experience.rating}</span>
                      <span className="ml-1 text-gray-400">({experience.reviews})</span>
                    </div>
                    <div className="font-medium text-blue-500">${experience.price}</div>
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
