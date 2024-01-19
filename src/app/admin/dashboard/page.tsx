import { redirect } from "next/navigation"
import { checkRoleServer } from "@/utils/roles"
import { SearchUsers } from "./search-users"
import { clerkClient } from "@clerk/nextjs"
import { setRole } from "../admin_action"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import PendingButton from "./roleButton"

export default async function AdminDashboard(params: { searchParams: { search?: string } }) {
  const isAdmin = checkRoleServer("admin")
  if (!isAdmin) {
    redirect("/")
  }
  const query = params.searchParams.search

  const users = query ? await clerkClient.users.getUserList({ query }) : []

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background py-2">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">This is the admin dashboard</h1>
      <p className="mb-4 text-gray-600">This page is restricted to users with the 'admin' role.</p>

      <div className="w-full max-w-md mb-8">
        <SearchUsers />
      </div>

      <div className="flex flex-wrap items-start justify-around max-w-4xl mt-6 sm:w-3/4">
        {users.map((user) => {
          return (
            <div
              key={user.id}
              className=" min-w-72 flex flex-col bg-background border border-foreground shadow-lg rounded-lg overflow-hidden m-4"
            >
              <div className="px-4 py-5 sm:p-6">
                <div className="text-lg leading-6 font-medium text-accent-foreground">
                  {user.firstName} {user.lastName}
                </div>
                <div className="mt-2 max-w-xl text-sm text-muted-foreground">
                  {
                    user.emailAddresses.find((email) => email.id === user.primaryEmailAddressId)
                      ?.emailAddress
                  }
                </div>
                <Badge
                  variant={user.publicMetadata.role === "admin" ? "default" : "outline"}
                  className="gmt-2 max-w-xl text-base font-bold  mt-2"
                >
                  {user.publicMetadata.role === "admin" ? "Admin" : "User"}
                </Badge>

                <div className="mt-5">
                  <form action={setRole}>
                    <Input type="hidden" value={user.id} name="id" />
                    <Input type="hidden" value="user" name="role" />
                    <PendingButton variant="outline" role="user" />
                  </form>
                </div>
                <div className="mt-5">
                  <form action={setRole}>
                    <Input type="hidden" value={user.id} name="id" />
                    <Input type="hidden" value="admin" name="role" />
                    <PendingButton variant="default" role="admin" />
                  </form>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
