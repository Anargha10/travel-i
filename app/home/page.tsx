"use client"
import { useRouter } from "next/navigation"
import { Search, Bell, Plus, MapPin, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function HomePage() {
  const router = useRouter()

  const upcomingTrips = [
    {
      id: 1,
      destination: "Paris",
      country: "France",
      image: "/paris.jpg?height=200&width=300",
      dates: "May 15 - May 21, 2023",
      days: 7,
    },
  ]

  const savedItineraries = [
    {
      id: 1,
      destination: "Tokyo",
      country: "Japan",
      image: "/japan.jpg?height=200&width=300",
      dates: "Oct 10 - Oct 20, 2023",
      days: 10,
    },
    {
      id: 2,
      destination: "New York",
      country: "USA",
      image: "/us.jpg?height=200&width=300",
      dates: "Dec 5 - Dec 10, 2023",
      days: 5,
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
            <h1 className="text-xl font-bold">My Trips</h1>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Create New Trip Button */}
        <Button
          className="mt-4 flex w-full items-center justify-center gap-2 bg-blue-600 py-6 hover:bg-blue-700"
          onClick={handleCreateNewTrip}
        >
          <Plus className="h-5 w-5" />
          Create New Trip
        </Button>

        {/* Tabs */}
        <Tabs defaultValue="upcoming" className="mt-6 w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-900">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="saved">Saved</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="mt-4">
            {upcomingTrips.length > 0 ? (
              <div className="space-y-4">
                {upcomingTrips.map((trip) => (
                  <div key={trip.id} className="overflow-hidden rounded-lg bg-gray-800">
                    <div className="relative h-48 w-full">
                      <Image
                        src={trip.image || "/placeholder.svg"}
                        alt={trip.destination}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h2 className="text-xl font-bold">{trip.destination} Getaway</h2>
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
            ) : (
              <div className="flex h-40 flex-col items-center justify-center rounded-lg bg-gray-800 p-4 text-center">
                <p className="text-gray-400">No upcoming trips</p>
                <Button variant="link" className="mt-2 text-blue-500" onClick={handleCreateNewTrip}>
                  Create your first trip
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="saved" className="mt-4">
            <div className="space-y-4">
              {savedItineraries.map((itinerary) => (
                <div key={itinerary.id} className="overflow-hidden rounded-lg bg-gray-800">
                  <div className="relative h-32 w-full">
                    <Image
                      src={itinerary.image || "/placeholder.svg"}
                      alt={itinerary.destination}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h2 className="text-lg font-bold">{itinerary.destination} Trip</h2>
                      <div className="mt-1 flex items-center text-sm">
                        <MapPin className="mr-1 h-3 w-3" />
                        <span>
                          {itinerary.destination}, {itinerary.country}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-400">
                        <Calendar className="mr-1 h-3 w-3" />
                        <span>{itinerary.dates}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Clock className="mr-1 h-3 w-3" />
                        <span>{itinerary.days} days</span>
                      </div>
                    </div>
                    <div className="mt-3 flex space-x-2">
                      <Button className="flex-1 bg-blue-600 text-sm hover:bg-blue-700">Book Now</Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-gray-700 bg-transparent text-sm hover:bg-gray-700"
                      >
                        View
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
