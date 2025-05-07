"use client"

import type React from "react"

import { Home, Map, Calendar, User, Plus } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function BottomNavigation() {
  const pathname = usePathname()

  // Don't show navigation on the onboarding flow
  if (pathname === "/" || pathname === "/destination" || pathname === "/preferences") {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-gray-800 bg-black py-2">
      <div className="mx-auto flex max-w-md items-center justify-between px-6">
        <NavItem href="/home" icon={<Home className="h-6 w-6" />} label="Home" isActive={pathname === "/home"} />
        <NavItem
          href="/explore"
          icon={<Map className="h-6 w-6" />}
          label="Explore"
          isActive={pathname === "/explore"}
        />
        <NavItem
          href="/create"
          icon={
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
              <Plus className="h-6 w-6" />
            </div>
          }
          label=""
          isActive={false}
          className="-mt-6"
        />
        <NavItem
          href="/itineraries"
          icon={<Calendar className="h-6 w-6" />}
          label="Trips"
          isActive={pathname === "/itineraries"}
        />
        <NavItem
          href="/profile"
          icon={<User className="h-6 w-6" />}
          label="Profile"
          isActive={pathname === "/profile"}
        />
      </div>
    </div>
  )
}

interface NavItemProps {
  href: string
  icon: React.ReactNode
  label: string
  isActive: boolean
  className?: string
}

function NavItem({ href, icon, label, isActive, className }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-col items-center justify-center space-y-1",
        isActive ? "text-blue-500" : "text-gray-500",
        className,
      )}
    >
      {icon}
      {label && <span className="text-xs">{label}</span>}
    </Link>
  )
}
