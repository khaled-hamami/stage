"use server"

import { checkRoleServer } from "@/utils/roles"
import { clerkClient } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"

export async function setRole(formData: FormData) {
  const checkRole = checkRoleServer("admin")
  if (!checkRole) {
    return { message: "Not Authorized" }
  }

  try {
    const res = await clerkClient.users.updateUser(formData.get("id") as string, {
      publicMetadata: { role: formData.get("role") },
    })
    revalidatePath("/admin/dashboard")
    return { message: res.publicMetadata }
  } catch (err) {
    return { message: err }
  }
}
