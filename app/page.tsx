import type React from "react"
import Login from "@/components/Auth/Login"
import Link from "next/link"
import Logo from "@/components/Icons/Logo"

const Home: React.FC = () => {
  return (
    <div className="bg-gray-700 flex-grow items-center grid lg:grid-cols-5 lg:justify-center lg:max-w-none lg:px-0">
      <div className="col-span-2 h-full bg-white flex flex-col justify-center lg:border-r border-[#ECE4DE]">
        <Link href="/dashboard" className="flex mx-auto justify-center h-60 w-60">
          <Logo />
        </Link>
        {/*<div className="h-40 w-40 bg-gray-700 rounded-full mx-auto text-white items-center flex justify-center">*/}
        {/*  LOGO*/}
        {/*</div>*/}
        <Login />
      </div>
      <div className="hidden lg:block h-full lg:col-span-3">
        <div className="bg-gray-400 h-full flex items-center justify-center font-bold text-5xl">Image Branding</div>
      </div>
    </div>
  )
}

export default Home
