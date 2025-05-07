"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Calendar, Clock, MapPin, Heart, Share2, Download, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function ItineraryResultsPage() {
  const router = useRouter()
  const [liked, setLiked] = useState(false)

  const handleSaveItinerary = () => {
    router.push("/home")
  }

  return (
    <div className="min-h-screen bg-black pb-20 text-white">
      <div className="mx-auto max-w-md">
        {/* Header Image */}
        <div className="relative h-64 w-full">
          <Image src="/placeholder.svg?height=400&width=600" alt="Paris" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />

          <div className="absolute left-0 right-0 top-0 p-4">
            <Button variant="ghost" size="icon" className="text-white" onClick={() => router.back()}>
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h1 className="text-2xl font-bold">Paris Getaway</h1>
            <div className="mt-1 flex items-center text-sm">
              <MapPin className="mr-1 h-4 w-4" />
              <span>Paris, France</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between border-b border-gray-800 p-4">
          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              <Star className="h-4 w-4 text-gray-500" />
            </div>
            <span className="text-sm text-gray-400">(120 reviews)</span>
          </div>
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className={liked ? "text-red-500" : "text-gray-400"}
              onClick={() => setLiked(!liked)}
            >
              <Heart className={`h-5 w-5 ${liked ? "fill-red-500" : ""}`} />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400">
              <Share2 className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400">
              <Download className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Itinerary Details */}
        <div className="p-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="flex items-center text-sm text-gray-400">
                <Calendar className="mr-1 h-4 w-4" />
                <span>7 days</span>
                <span className="mx-2">•</span>
                <Clock className="mr-1 h-4 w-4" />
                <span>May 15 - May 21, 2023</span>
              </div>
            </div>
            <div className="text-lg font-bold text-blue-500">$1,450</div>
          </div>

          <p className="text-gray-300">
            Experience the magic of Paris with this perfectly balanced 7-day itinerary. Explore iconic landmarks,
            indulge in delicious cuisine, and immerse yourself in Parisian culture.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-900 p-0">
            <TabsTrigger value="overview" className="py-3">
              Overview
            </TabsTrigger>
            <TabsTrigger value="daily" className="py-3">
              Daily Plan
            </TabsTrigger>
            <TabsTrigger value="map" className="py-3">
              Map
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="p-4">
            <div className="space-y-6">
              <div>
                <h2 className="mb-2 text-lg font-semibold">Highlights</h2>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "Eiffel Tower", icon: "🗼" },
                    { name: "Louvre Museum", icon: "🏛️" },
                    { name: "Notre Dame", icon: "⛪" },
                    { name: "Seine River Cruise", icon: "🚢" },
                  ].map((highlight) => (
                    <div key={highlight.name} className="flex items-center rounded-lg bg-gray-800 p-3">
                      <span className="mr-3 text-2xl">{highlight.icon}</span>
                      <span className="text-sm">{highlight.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-2 text-lg font-semibold">Included</h2>
                <div className="space-y-2">
                  {[
                    "4-star hotel accommodation",
                    "Daily breakfast",
                    "Skip-the-line tickets to major attractions",
                    "Seine River dinner cruise",
                    "Guided tour of the Louvre",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs">
                        ✓
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-2 text-lg font-semibold">Not Included</h2>
                <div className="space-y-2">
                  {[
                    "Flights to/from Paris",
                    "Travel insurance",
                    "Personal expenses",
                    "Lunch and dinner (except where specified)",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-gray-700 text-xs">
                        ✕
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="daily" className="p-4">
            <div className="space-y-6">
              {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                <div key={day} className="rounded-lg bg-gray-800 p-4">
                  <h3 className="mb-2 font-semibold">Day {day}</h3>
                  <div className="space-y-4">
                    {day === 1 && (
                      <>
                        <div className="flex items-start">
                          <div className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-xs">
                            AM
                          </div>
                          <div>
                            <h4 className="font-medium">Arrival & Check-in</h4>
                            <p className="text-sm text-gray-400">Arrive at your hotel and settle in</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-500 text-xs">
                            PM
                          </div>
                          <div>
                            <h4 className="font-medium">Eiffel Tower Visit</h4>
                            <p className="text-sm text-gray-400">Evening visit with spectacular city views</p>
                          </div>
                        </div>
                      </>
                    )}
                    {day === 2 && (
                      <>
                        <div className="flex items-start">
                          <div className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-xs">
                            AM
                          </div>
                          <div>
                            <h4 className="font-medium">Louvre Museum</h4>
                            <p className="text-sm text-gray-400">Guided tour of the world's largest art museum</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-500 text-xs">
                            PM
                          </div>
                          <div>
                            <h4 className="font-medium">Seine River Cruise</h4>
                            <p className="text-sm text-gray-400">Dinner cruise along the Seine</p>
                          </div>
                        </div>
                      </>
                    )}
                    {day > 2 && (
                      <>
                        <div className="flex items-start">
                          <div className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-xs">
                            AM
                          </div>
                          <div>
                            <h4 className="font-medium">Planned Activity</h4>
                            <p className="text-sm text-gray-400">Details will be provided in your final itinerary</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-500 text-xs">
                            PM
                          </div>
                          <div>
                            <h4 className="font-medium">Planned Activity</h4>
                            <p className="text-sm text-gray-400">Details will be provided in your final itinerary</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="map" className="p-0">
            <div className="relative h-[400px] w-full bg-gray-800">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-400">Map view will be available in the final itinerary</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="fixed bottom-6 left-0 right-0 px-4">
          <Button className="w-full bg-blue-600 py-6 text-white hover:bg-blue-700" onClick={handleSaveItinerary}>
            Save Itinerary
          </Button>
        </div>
      </div>
    </div>
  )
}
