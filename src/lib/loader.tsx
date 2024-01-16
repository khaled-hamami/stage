"use client"
import RingLoader from "react-spinners/RingLoader"

export default function Loader() {
  return (
    <div className="bg-transparent w-full h-screen flex justify-center items-center">
      <RingLoader
        color="#6D28D9"
        loading={true}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}
