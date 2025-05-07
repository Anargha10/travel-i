"use client"

import {
  Settings,
  ChevronRight,
  MapPin,
  Calendar,
  LogOut,
  User,
  CreditCard,
  Bell,
  Shield,
  HelpCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

export default function ProfilePage() {
  const menuItems = [
    { icon: <User className="h-5 w-5" />, label: "Personal Information", href: "#" },
    { icon: <CreditCard className="h-5 w-5" />, label: "Payment Methods", href: "#" },
    { icon: <Bell className="h-5 w-5" />, label: "Notifications", href: "#" },
    { icon: <Shield className="h-5 w-5" />, label: "Privacy & Security", href: "#" },
    { icon: <HelpCircle className="h-5 w-5" />, label: "Help & Support", href: "#" },
  ]

  return (
    <div className="min-h-screen bg-black pb-20 text-white">
      <div className="mx-auto max-w-md px-4">
        {/* Header */}
        <div className="flex items-center justify-between py-4">
          <h1 className="text-xl font-bold">Profile</h1>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </div>

        {/* User Profile */}
        <div className="mt-4 rounded-lg bg-gray-800 p-4">
          <div className="flex items-center">
            <Avatar className="h-16 w-16 border-2 border-blue-500">
              <AvatarImage src="/placeholder.svg?height=100&width=100" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">John Doe</h2>
              <p className="text-sm text-gray-400">john.doe@example.com</p>
            </div>
            <Button variant="ghost" size="icon" className="ml-auto">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="rounded-lg bg-gray-800 p-4 text-center">
            <p className="text-2xl font-bold">3</p>
            <p className="text-xs text-gray-400">Trips</p>
          </div>
          <div className="rounded-lg bg-gray-800 p-4 text-center">
            <p className="text-2xl font-bold">12</p>
            <p className="text-xs text-gray-400">Countries</p>
          </div>
          <div className="rounded-lg bg-gray-800 p-4 text-center">
            <p className="text-2xl font-bold">48</p>
            <p className="text-xs text-gray-400">Days</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-6">
          <h2 className="mb-4 text-lg font-semibold">Recent Activity</h2>
          <div className="space-y-4">
            <div className="rounded-lg bg-gray-800 p-4">
              <div className="flex">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
                  <Image src="/paris.jpg?height=100&width=100" alt="Paris" fill className="object-cover" />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium">Paris Itinerary Saved</h3>
                  <div className="mt-1 flex items-center text-xs text-gray-400">
                    <MapPin className="mr-1 h-3 w-3" />
                    <span>Paris, France</span>
                  </div>
                  <div className="mt-1 flex items-center text-xs text-gray-400">
                    <Calendar className="mr-1 h-3 w-3" />
                    <span>May 15 - May 21, 2023</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-gray-800 p-4">
              <div className="flex">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
                  <Image src="/japan.jpg?height=100&width=100" alt="Tokyo" fill className="object-cover" />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium">Tokyo Itinerary Created</h3>
                  <div className="mt-1 flex items-center text-xs text-gray-400">
                    <MapPin className="mr-1 h-3 w-3" />
                    <span>Tokyo, Japan</span>
                  </div>
                  <div className="mt-1 flex items-center text-xs text-gray-400">
                    <Calendar className="mr-1 h-3 w-3" />
                    <span>Oct 10 - Oct 20, 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="mt-6">
          <h2 className="mb-4 text-lg font-semibold">Settings</h2>
          <div className="space-y-2 rounded-lg bg-gray-800">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 ${
                  index !== menuItems.length - 1 ? "border-b border-gray-700" : ""
                }`}
              >
                <div className="flex items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700">{item.icon}</div>
                  <span className="ml-3">{item.label}</span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Logout Button */}
        <Button variant="outline" className="mt-6 w-full border-gray-700 py-6 hover:bg-gray-700">
          <LogOut className="mr-2 h-5 w-5" />
          Log Out
        </Button>
      </div>
    </div>
  )
}
