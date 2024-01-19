import { Roles } from "@/types/globals"
import { auth } from "@clerk/nextjs"
import { useUser } from "@clerk/nextjs"

export const checkRoleServer = (role: Roles) => {
  const { sessionClaims } = auth()
  if (role === "admin") return sessionClaims?.metadata.role === role
  return sessionClaims?.metadata.role !== "admin"
}

export const useCheckRoleClient = (role: Roles) => {
  const { user } = useUser()

  if (role === "admin") return user?.publicMetadata.role === role
  return user?.publicMetadata.role !== "admin"
}
