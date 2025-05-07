"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, Filter, MapPin, Calendar, Clock, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function ItinerariesPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const trips = [
    {
      id: 1,
      destination: "Paris",
      country: "France",
      image: "/paris.jpg?height=200&width=300",
      dates: "May 15 - May 21, 2023",
      days: 7,
      status: "upcoming",
    },
    {
      id: 2,
      destination: "Tokyo",
      country: "Japan",
      image: "/japan.jpg?height=200&width=300",
      dates: "Oct 10 - Oct 20, 2023",
      days: 10,
      status: "planned",
    },
    {
      id: 3,
      destination: "Rome",
      country: "Italy",
      image: "/placeholder.svg?height=200&width=300",
      dates: "Mar 5 - Mar 12, 2023",
      days: 7,
      status: "past",
    },
    {
      id: 4,
      destination: "Barcelona",
      country: "Spain",
      image: "/placeholder.svg?height=200&width=300",
      dates: "Jul 8 - Jul 15, 2022",
      days: 7,
      status: "past",
    },
  ]

  const handleCreateNewTrip = () => {
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-black pb-20 text-white">
      <div className="mx-auto max-w-md px-4">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-black py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">My Itineraries</h1>
            <Button variant="ghost" size="icon" className="rounded-full bg-gray-800">
              <Plus className="h-5 w-5" onClick={handleCreateNewTrip} />
            </Button>
          </div>

          {/* Search */}
          <div className="mt-4 flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search trips"
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
        <Tabs defaultValue="all" className="mt-6 w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gray-900">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="planned">Planned</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-4">
            <div className="space-y-4">
              {trips.map((trip) => (
                <div key={trip.id} className="overflow-hidden rounded-lg bg-gray-800">
                  <div className="relative h-40 w-full">
                    <Image
                      src={trip.image || "/placeholder.svg"}
                      alt={trip.destination}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h2 className="text-xl font-bold">{trip.destination} Trip</h2>
                      <div className="mt-1 flex items-center text-sm">
                        <MapPin className="mr-1 h-4 w-4" />
                        <span>
                          {trip.destination}, {trip.country}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar className="mr-1 h-4 w-4" />
                        <span>{trip.dates}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="mr-1 h-4 w-4" />
                        <span>{trip.days} days</span>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700">View Details</Button>
                      <Button variant="outline" className="flex-1 border-gray-700 bg-transparent hover:bg-gray-700">
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="mt-4">
            <div className="space-y-4">
              {trips
                .filter((trip) => trip.status === "upcoming")
                .map((trip) => (
                  <div key={trip.id} className="overflow-hidden rounded-lg bg-gray-800">
                    <div className="relative h-40 w-full">
                      <Image
                        src={trip.image || "/placeholder.svg"}
                        alt={trip.destination}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h2 className="text-xl font-bold">{trip.destination} Trip</h2>
                        <div className="mt-1 flex items-center text-sm">
                          <MapPin className="mr-1 h-4 w-4" />
                          <span>
                            {trip.destination}, {trip.country}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-400">
                          <Calendar className="mr-1 h-4 w-4" />
                          <span>{trip.dates}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <Clock className="mr-1 h-4 w-4" />
                          <span>{trip.days} days</span>
                        </div>
                      </div>
                      <div className="mt-4 flex space-x-2">
                        <Button className="flex-1 bg-blue-600 hover:bg-blue-700">View Details</Button>
                        <Button variant="outline" className="flex-1 border-gray-700 bg-transparent hover:bg-gray-700">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="planned" className="mt-4">
            <div className="space-y-4">
              {trips
                .filter((trip) => trip.status === "planned")
                .map((trip) => (
                  <div key={trip.id} className="overflow-hidden rounded-lg bg-gray-800">
                    <div className="relative h-40 w-full">
                      <Image
                        src={trip.image || "/placeholder.svg"}
                        alt={trip.destination}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h2 className="text-xl font-bold">{trip.destination} Trip</h2>
                        <div className="mt-1 flex items-center text-sm">
                          <MapPin className="mr-1 h-4 w-4" />
                          <span>
                            {trip.destination}, {trip.country}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-400">
                          <Calendar className="mr-1 h-4 w-4" />
                          <span>{trip.dates}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <Clock className="mr-1 h-4 w-4" />
                          <span>{trip.days} days</span>
                        </div>
                      </div>
                      <div className="mt-4 flex space-x-2">
                        <Button className="flex-1 bg-blue-600 hover:bg-blue-700">View Details</Button>
                        <Button variant="outline" className="flex-1 border-gray-700 bg-transparent hover:bg-gray-700">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="past" className="mt-4">
            <div className="space-y-4">
              {trips
                .filter((trip) => trip.status === "past")
                .map((trip) => (
                  <div key={trip.id} className="overflow-hidden rounded-lg bg-gray-800">
                    <div className="relative h-40 w-full">
                      <Image
                        src={trip.image || "/placeholder.svg"}
                        alt={trip.destination}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h2 className="text-xl font-bold">{trip.destination} Trip</h2>
                        <div className="mt-1 flex items-center text-sm">
                          <MapPin className="mr-1 h-4 w-4" />
                          <span>
                            {trip.destination}, {trip.country}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-400">
                          <Calendar className="mr-1 h-4 w-4" />
                          <span>{trip.dates}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <Clock className="mr-1 h-4 w-4" />
                          <span>{trip.days} days</span>
                        </div>
                      </div>
                      <div className="mt-4 flex space-x-2">
                        <Button className="flex-1 bg-blue-600 hover:bg-blue-700">View Details</Button>
                        <Button variant="outline" className="flex-1 border-gray-700 bg-transparent hover:bg-gray-700">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
