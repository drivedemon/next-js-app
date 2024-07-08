"use client"

import {useRouter} from "next/navigation"
import {Label} from "@/components/Forms/Label"
import {Input} from "@/components/Forms/Input"
import SubmitButton from "@/components/Forms/SubmitButton"
import type React from "react"

const Home: React.FC = () => {
  const router = useRouter()

  const handleSubmit = () => {
    // mockup
    router.push("dashboard")
  }

  return (
    <main>
      <div className="bg-gray-700 h-screen flex-col items-center grid lg:justify-center lg:max-w-none lg:grid-cols-5 lg:px-0">
        <div className="col-span-2 h-full bg-white flex flex-col justify-center lg:border-r border-[#ECE4DE]">
          <div className="h-40 w-40 bg-gray-700 rounded-full mx-auto text-white items-center flex justify-center">
            LOGO
          </div>
          <form action={handleSubmit} className="px-10 py-8 grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input className="flex items-center" type="email" name="email" id="email" placeholder="EMAIL" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                className="flex items-center"
                type="password"
                name="password"
                id="password"
                placeholder="PASSWORD"
              />
            </div>
            <div className="mx-auto">
              <SubmitButton className="mx-10 text-white">Sign In</SubmitButton>
            </div>
          </form>
        </div>
        <div className="hidden lg:block h-full lg:col-span-3">
          <div className="bg-gray-400 h-full flex items-center justify-center font-bold text-5xl">Image Branding</div>
        </div>
      </div>
    </main>
  )
}

export default Home
