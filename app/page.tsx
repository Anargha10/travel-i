"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { MapPin, Calendar, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function OnboardingPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    destination: "",
    duration: "",
    travelWith: "",
  })

  const handleContinue = () => {
    // In a real app, we would validate the form
    router.push("/destination")
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <div className="relative mx-auto w-full max-w-md px-6 py-12">
        {/* Status bar */}
        <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-4">
          <div className="text-sm">9:41</div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-4 rounded-sm bg-white"></div>
            <div className="h-3 w-3 rounded-full bg-white"></div>
            <div className="h-3 w-3 rounded-full bg-white"></div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-1">
            <h1 className="text-2xl font-bold">Plan Your Journey, Your Way!</h1>
            <p className="text-sm text-gray-400">Let&apos;s create your personalised travel experience</p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block">Where would you like to go?</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Enter Destination"
                  className="border-0 bg-gray-800 pl-10 text-white placeholder:text-gray-500"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block">How long will you stay?</label>
              <Select
                value={formData.duration}
                onValueChange={(value) => setFormData({ ...formData, duration: value })}
              >
                <SelectTrigger className="border-0 bg-gray-800 text-white">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-gray-400" />
                    <SelectValue placeholder="Select Duration" />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-gray-800 text-white">
                  <SelectItem value="weekend">Weekend</SelectItem>
                  <SelectItem value="week">1 Week</SelectItem>
                  <SelectItem value="twoweeks">2 Weeks</SelectItem>
                  <SelectItem value="month">1 Month</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="block">Who are you traveling with?</label>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className={`flex items-center justify-center gap-2 border-0 bg-gray-800 py-6 hover:bg-gray-700 ${
                    formData.travelWith === "solo" ? "ring-2 ring-blue-500" : ""
                  }`}
                  onClick={() => setFormData({ ...formData, travelWith: "solo" })}
                >
                  <span className="text-lg">👤</span>
                  <span>Solo</span>
                </Button>
                <Button
                  variant="outline"
                  className={`flex items-center justify-center gap-2 border-0 bg-gray-800 py-6 hover:bg-gray-700 ${
                    formData.travelWith === "couple" ? "ring-2 ring-blue-500" : ""
                  }`}
                  onClick={() => setFormData({ ...formData, travelWith: "couple" })}
                >
                  <span className="text-lg">👫</span>
                  <span>Couple</span>
                </Button>
                <Button
                  variant="outline"
                  className={`flex items-center justify-center gap-2 border-0 bg-gray-800 py-6 hover:bg-gray-700 ${
                    formData.travelWith === "family" ? "ring-2 ring-blue-500" : ""
                  }`}
                  onClick={() => setFormData({ ...formData, travelWith: "family" })}
                >
                  <span className="text-lg">👨‍👩‍👧‍👦</span>
                  <span>Family</span>
                </Button>
                <Button
                  variant="outline"
                  className={`flex items-center justify-center gap-2 border-0 bg-gray-800 py-6 hover:bg-gray-700 ${
                    formData.travelWith === "friends" ? "ring-2 ring-blue-500" : ""
                  }`}
                  onClick={() => setFormData({ ...formData, travelWith: "friends" })}
                >
                  <span className="text-lg">👥</span>
                  <span>Friends</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <Button className="w-full bg-blue-600 py-6 text-white hover:bg-blue-700" onClick={handleContinue}>
            Continue
          </Button>
        </div>

        {/* Performance notice */}
        <div className="absolute bottom-4 left-0 right-0 flex items-center justify-between rounded bg-gray-900 px-4 py-2 text-xs">
          <p>Improve performance by enabling hardware acceleration</p>
          <div className="flex items-center gap-2">
            <span className="cursor-pointer text-blue-400">Learn more</span>
            <X className="h-4 w-4 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  )
}
