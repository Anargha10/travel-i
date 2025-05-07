"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePickerWithRange } from "@/components/date-range-picker"
import { addDays } from "date-fns"
import type { DateRange } from "react-day-picker"

export default function CreateTripPage() {
  const router = useRouter()
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  })

  const handleCreateTrip = () => {
    router.push("/")
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
            <h1 className="ml-2 text-xl font-bold">Create New Trip</h1>
          </div>
        </div>

        <div className="mt-6 space-y-6">
          {/* Destination */}
          <div className="space-y-2">
            <label className="block font-medium">Where do you want to go?</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Enter destination"
                className="border-0 bg-gray-800 pl-10 text-white placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* Date Range */}
          <div className="space-y-2">
            <label className="block font-medium">When are you traveling?</label>
            <DatePickerWithRange date={date} setDate={setDate} />
          </div>

          {/* Trip Type */}
          <div className="space-y-2">
            <label className="block font-medium">Trip type</label>
            <Select>
              <SelectTrigger className="border-0 bg-gray-800 text-white">
                <SelectValue placeholder="Select trip type" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 text-white">
                <SelectItem value="leisure">Leisure</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="family">Family</SelectItem>
                <SelectItem value="adventure">Adventure</SelectItem>
                <SelectItem value="cultural">Cultural</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Travelers */}
          <div className="space-y-2">
            <label className="block font-medium">Number of travelers</label>
            <Select>
              <SelectTrigger className="border-0 bg-gray-800 text-white">
                <SelectValue placeholder="Select number of travelers" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 text-white">
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5+">5+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Budget */}
          <div className="space-y-2">
            <label className="block font-medium">Budget range</label>
            <Select>
              <SelectTrigger className="border-0 bg-gray-800 text-white">
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 text-white">
                <SelectItem value="budget">Budget ($)</SelectItem>
                <SelectItem value="moderate">Moderate ($$)</SelectItem>
                <SelectItem value="luxury">Luxury ($$$)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Create Button */}
        <div className="fixed bottom-6 left-0 right-0 px-4">
          <Button className="w-full bg-blue-600 py-6 text-white hover:bg-blue-700" onClick={handleCreateTrip}>
            Create Trip
          </Button>
        </div>
      </div>
    </div>
  )
}
