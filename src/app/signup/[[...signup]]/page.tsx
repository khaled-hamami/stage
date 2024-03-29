import { SignUp } from "@clerk/nextjs"

export default function signup() {
  return (
    <div className="w-full flex justify-center py-10">
      <SignUp path="/signup" routing="path" signInUrl="/signin" />
    </div>
  )
}
