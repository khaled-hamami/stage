import Link from "next/link"
import { ModeToggle } from "./modeToogler"
import { auth, UserButton, useUser } from "@clerk/nextjs"
import Name from "./name"

export default function Navbar() {
  const { userId } = auth()
  return (
    <div className="w-full flex h-16 justify-between items-center px-24 bg-secondary">
      <Link href="/" className="font-bold text-3xl">
        my app
      </Link>
      {!userId && (
        <div className="h-full w-1/2 flex justify-evenly items-center">
          <Link href="/signin">signin</Link>
          <Link href="/signup"> signup </Link>
        </div>
      )}
      <div className="flex gap-4 items-center">
        <UserButton afterSignOutUrl="/" />
        <ModeToggle />
      </div>
    </div>
  )
}
