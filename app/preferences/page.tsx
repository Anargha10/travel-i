"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PreferencesPage() {
  const router = useRouter()
  const [budget, setBudget] = useState([500])
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])

  const interests = [
    { id: "nature", label: "Nature", icon: "🌳" },
    { id: "culture", label: "Culture", icon: "🏛️" },
    { id: "food", label: "Food", icon: "🍽️" },
    { id: "adventure", label: "Adventure", icon: "🧗‍♂️" },
    { id: "relaxation", label: "Relaxation", icon: "🧘‍♀️" },
    { id: "nightlife", label: "Nightlife", icon: "🌃" },
    { id: "shopping", label: "Shopping", icon: "🛍️" },
    { id: "history", label: "History", icon: "📜" },
  ]

  const toggleInterest = (id: string) => {
    if (selectedInterests.includes(id)) {
      setSelectedInterests(selectedInterests.filter((item) => item !== id))
    } else {
      setSelectedInterests([...selectedInterests, id])
    }
  }

  const handleGenerateItinerary = () => {
    router.push("/itinerary-results")
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
            <h1 className="ml-2 text-xl font-bold">Your Preferences</h1>
          </div>
        </div>

        <div className="mt-4 space-y-8">
          <Tabs defaultValue="interests" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-800">
              <TabsTrigger value="interests">Interests</TabsTrigger>
              <TabsTrigger value="budget">Budget</TabsTrigger>
              <TabsTrigger value="accommodation">Accommodation</TabsTrigger>
            </TabsList>

            <TabsContent value="interests" className="mt-6">
              <h2 className="mb-4 text-lg font-semibold">What are you interested in?</h2>
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest) => (
                  <Button
                    key={interest.id}
                    variant="outline"
                    className={`flex items-center justify-start gap-3 border-0 bg-gray-800 py-6 text-left hover:bg-gray-700 ${
                      selectedInterests.includes(interest.id) ? "ring-2 ring-blue-500" : ""
                    }`}
                    onClick={() => toggleInterest(interest.id)}
                  >
                    <span className="text-2xl">{interest.icon}</span>
                    <span>{interest.label}</span>
                    {selectedInterests.includes(interest.id) && <Check className="ml-auto h-4 w-4 text-blue-500" />}
                  </Button>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="budget" className="mt-6 space-y-6">
              <div>
                <h2 className="mb-4 text-lg font-semibold">What's your budget?</h2>
                <div className="space-y-6 px-2">
                  <Slider defaultValue={[500]} max={2000} step={50} value={budget} onValueChange={setBudget} />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Budget per day</span>
                    <span className="text-xl font-bold">${budget[0]}</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-lg font-semibold">Accommodation type</h2>
                <div className="space-y-2">
                  {["Budget", "Mid-range", "Luxury"].map((type) => (
                    <div key={type} className="flex items-center rounded-lg bg-gray-800 p-4">
                      <div className="flex-1">
                        <h3 className="font-medium">{type}</h3>
                        <p className="text-sm text-gray-400">
                          {type === "Budget" && "Hostels, guesthouses, budget hotels"}
                          {type === "Mid-range" && "3-4 star hotels, nice Airbnbs"}
                          {type === "Luxury" && "5-star hotels, premium resorts"}
                        </p>
                      </div>
                      <div className="h-5 w-5 rounded-full border border-blue-500 p-0.5">
                        {type === "Mid-range" && <div className="h-full w-full rounded-full bg-blue-500" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="accommodation" className="mt-6">
              <h2 className="mb-4 text-lg font-semibold">Accommodation preferences</h2>
              <div className="space-y-3">
                {[
                  { label: "Wi-Fi", selected: true },
                  { label: "Breakfast included", selected: false },
                  { label: "Swimming pool", selected: true },
                  { label: "Air conditioning", selected: true },
                  { label: "Pet friendly", selected: false },
                  { label: "Free parking", selected: false },
                ].map((pref) => (
                  <div key={pref.label} className="flex items-center rounded-lg bg-gray-800 p-4">
                    <div className="flex-1">
                      <h3 className="font-medium">{pref.label}</h3>
                    </div>
                    <div className="h-5 w-5 rounded-full border border-blue-500 p-0.5">
                      {pref.selected && <div className="h-full w-full rounded-full bg-blue-500" />}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="fixed bottom-6 left-0 right-0 px-4">
          <Button className="w-full bg-blue-600 py-6 text-white hover:bg-blue-700" onClick={handleGenerateItinerary}>
            Generate Itinerary
          </Button>
        </div>
      </div>
    </div>
  )
}
