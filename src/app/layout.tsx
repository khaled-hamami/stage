import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"
import { ThemeProvider } from "@/providers/theme"
import { ClerkProvider } from "@clerk/nextjs"
import Navbar from "@/components/navbar"
import ClerkAuthProvider from "@/providers/clerk"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}
type children = { children: React.ReactNode }
export default function RootLayout({ children }: children) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkAuthProvider>
            <Navbar />
            {children}
          </ClerkAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
