"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { usePathname, useRouter } from "next/navigation"
import { useFormStatus } from "react-dom"

export const SearchUsers = () => {
  const router = useRouter()
  const pathname = usePathname()
  const { pending } = useFormStatus()
  return (
    <div className="bg-secondary p-6 rounded shadow">
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          const form = e.currentTarget
          const formData = new FormData(form)
          const queryTerm = formData.get("search") as string
          router.push(pathname + "?search=" + queryTerm)
        }}
        className="flex items-center space-x-4"
      >
        <Input
          placeholder="Search for users"
          id="search"
          name="search"
          type="text"
          className="flex-grow bg-white text-gray-900 border-gray-300 focus:border-accent-foreground focus:ring-accent-foreground"
        />
        <Button disabled={pending} type="submit">
          Submit
        </Button>
      </form>
    </div>
  )
}
