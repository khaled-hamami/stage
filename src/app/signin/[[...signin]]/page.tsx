import { SignIn } from "@clerk/nextjs"

export default function signin() {
  return (
    <div className="w-full flex justify-center py-10">
      <SignIn path="/signin" routing="path" signUpUrl="/signup"/>
    </div>
  )
}
