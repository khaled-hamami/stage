"use client"

import { ClerkProvider } from "@clerk/nextjs"
import { useTheme } from "next-themes"
import { dark } from "@clerk/themes"
import React from "react"

type children = { children: React.ReactNode }

export default function ClerkAuthProvider({ children }: children) {
  const { theme } = useTheme()

  return (
    <ClerkProvider appearance={{ baseTheme: theme === "light" ? undefined : dark }}>
      {children}
    </ClerkProvider>
  )
}
