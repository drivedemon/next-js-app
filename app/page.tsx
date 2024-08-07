import type React from "react"
import Login from "@/components/Auth/Login"

const Home: React.FC = () => {
  return (
    <main>
      <div className="bg-gray-700 h-screen flex-col items-center grid lg:justify-center lg:max-w-none lg:grid-cols-5 lg:px-0">
        <div className="col-span-2 h-full bg-white flex flex-col justify-center lg:border-r border-[#ECE4DE]">
          <div className="h-40 w-40 bg-gray-700 rounded-full mx-auto text-white items-center flex justify-center">
            LOGO
          </div>
          <Login />
        </div>
        <div className="hidden lg:block h-full lg:col-span-3">
          <div className="bg-gray-400 h-full flex items-center justify-center font-bold text-5xl">Image Branding</div>
        </div>
      </div>
    </main>
  )
}

export default Home
