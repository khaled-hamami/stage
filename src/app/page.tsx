import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardTitle, CardContent, Card, CardDescription } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { SVGProps } from "react"
import Image from "next/image"
import Home1 from "@/../public/Home1.jpg"
import Home2 from "@/../public/Home2.jpg"
import Home3 from "@/../public/Home3.jpg"
export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Discover Your Next Adventure
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Find the best destinations and accommodations for your next trip.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Input className="flex-1" placeholder="Location" />
                <Input className="flex-1" placeholder="Start Date" type="date" />
                <Input className="flex-1" placeholder="End Date" type="date" />
                <Button className="w-full sm:w-auto">Search</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Popular Destinations
            </h2>
            <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <Image
                  alt="Destination 1"
                  className="w-full h-48 object-cover rounded-xl"
                  height="200"
                  src={Home1}
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <CardContent className="flex justify-center items-center">
                  <CardTitle className="pt-5">Destination 1</CardTitle>
                </CardContent>
              </Card>
              <Card>
                <Image
                  alt="Destination 2"
                  className="w-full h-48 object-cover rounded-xl"
                  height="200"
                  src={Home2}
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <CardContent className="flex justify-center items-center">
                  <CardTitle className="pt-5">Destination 2</CardTitle>
                </CardContent>
              </Card>
              <Card>
                <Image
                  alt="Destination 3"
                  className="w-full h-48 object-cover rounded-xl"
                  height="200"
                  src={Home3}
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <CardContent className="flex justify-center items-center">
                  <CardTitle className="pt-5">Destination 3</CardTitle>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Special Offers</h2>
            <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent>
                  <CardTitle>Offer 1</CardTitle>
                  <CardDescription>Enjoy a special discount on your next booking.</CardDescription>
                  <Button className="mt-4">Book Now</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <CardTitle>Offer 2</CardTitle>
                  <CardDescription>
                    Get a free night with every booking of 3 nights or more.
                  </CardDescription>
                  <Button className="mt-4">Book Now</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <CardTitle>Offer 3</CardTitle>
                  <CardDescription>
                    Save on your next family vacation with our special package.
                  </CardDescription>
                  <Button className="mt-4">Book Now</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Testimonials</h2>
            <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent>
                  <CardTitle>John Doe</CardTitle>
                  <CardDescription>
                    "Booking.tn made my trip easy and stress-free. Highly recommended!"
                  </CardDescription>
                  <Avatar>
                    <AvatarImage alt="John Doe" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <CardTitle>Jane Smith</CardTitle>
                  <CardDescription>
                    "Great service and amazing offers. I won't book anywhere else!"
                  </CardDescription>
                  <Avatar>
                    <AvatarImage alt="Jane Smith" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <CardTitle>Bob Johnson</CardTitle>
                  <CardDescription>
                    "The best booking website by far. Their customer service is top-notch."
                  </CardDescription>
                  <Avatar>
                    <AvatarImage alt="Bob Johnson" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>BJ</AvatarFallback>
                  </Avatar>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
            <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-start gap-4">
                <SearchIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <div>
                  <h3 className="text-lg font-semibold">Search</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Find the perfect destination and accommodation for your trip.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CreditCardIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <div>
                  <h3 className="text-lg font-semibold">Book</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Book your trip with our easy and secure payment process.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <SmileIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <div>
                  <h3 className="text-lg font-semibold">Enjoy</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Enjoy your trip and make unforgettable memories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Booking.tn. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          post
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
        <div className="flex items-center gap-2 mt-4 sm:mt-0">
          <FacebookIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
          <TwitterIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
          <InstagramIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
        </div>
        <div className="flex w-full max-w-sm items-center space-x-2 mt-4 sm:mt-0">
          <Input placeholder="Email" type="email" />
          <Button type="submit">Subscribe</Button>
        </div>
      </footer>
    </div>
  )
}

function CreditCardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function GlobeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function SmileIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  )
}

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
