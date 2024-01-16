"use client"

import { Button } from "@/components/ui/button"
import { useFormStatus } from "react-dom"

type variantType = "outline" | "default" | "destructive" | "secondary" | "ghost" | "link"
type RoleType = "admin" | "user"
export default function RoleButton({ variant, role }: { variant: variantType; role: RoleType }) {
  const { pending } = useFormStatus()
  return (
    <Button variant={variant} disabled={pending} type="submit" className="w-full">
      {pending ? "loading..." : `Make ${role}`}
    </Button>
  )
}
