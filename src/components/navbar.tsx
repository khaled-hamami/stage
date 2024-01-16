"use client"

import Link from "next/link"
import { ModeToggle } from "./modeToogler"
import { UserButton, useUser } from "@clerk/nextjs"
import { useCheckRoleClient } from "@/utils/roles"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const { isSignedIn } = useUser()
  const isAdmin = useCheckRoleClient("admin")
  const [isCollapsed, setIsCollapsed] = useState(true)
  const pathname = usePathname()

  return (
    <nav className="bg-accent">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-whitefocus:ring-inset "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${isCollapsed ? "block" : "hidden"}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className={`h-6 w-6 ${isCollapsed ? "hidden" : "block"}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className={`hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium ${
                    pathname === "/" ? "text-primary" : ""
                  }`}
                  aria-current="page"
                >
                  Home
                </Link>

                {isAdmin && (
                  <Link
                    href="/admin/dashboard"
                    className={`hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium ${
                      pathname === "/admin/dashboard" ? "text-primary" : ""
                    }`}
                  >
                    Dashboard
                  </Link>
                )}
                {!isSignedIn && (
                  <Link
                    href="signin"
                    className={`hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium ${
                      pathname === "/signin" ? "text-primary" : ""
                    }`}
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex  gap-10 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <ModeToggle />

            <div className="relative ml-3">
              <div>
                <UserButton afterSignOutUrl="/" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {!isCollapsed && (
        <div
          onBlur={() => {
            setIsCollapsed(true)
          }}
          tabIndex={-2}
          className="sm:hidden"
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              onClick={() => setIsCollapsed(true)}
              href="/"
              className={` hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 telg-base text-lg ${
                pathname === "/" ? "text-primary" : ""
              }`}
              aria-current="page"
            >
              Home
            </Link>
            {isAdmin && (
              <Link
                onClick={() => setIsCollapsed(true)}
                href="/admin/dashboard"
                className={` hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 telg-base text-lg ${
                  pathname === "/admin/dashboard" ? "text-primary" : ""
                }`}
              >
                Dashboard
              </Link>
            )}

            {!isSignedIn && (
              <Link
                href="signin"
                className={` hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 telg-base text-lg ${
                  pathname === "/signin" ? "text-primary" : ""
                }`}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
