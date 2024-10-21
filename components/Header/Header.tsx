"use client"

import type {FC} from "react"
import {useEffect, useState} from "react"
import type {TUser} from "@/types/User"
import {usePathname} from "next/navigation"
import {CRouters} from "@/types/Router"
import Link from "next/link"
import {CHeaderNavs} from "@/components/Header/constants"
import {ArrowRightStartOnRectangleIcon, UserCircleIcon, UserIcon} from "@heroicons/react/24/outline"
import {useToast} from "@/components/Toast/useToast"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu"
import Logo from "@/components/Icons/Logo"
import {cn} from "@/lib/utils"
import axios from "axios"
import {LOGOUT_URL} from "@/lib/apiEndPoints"
import {signOut, useSession} from "next-auth/react"
import {authOptions, IAuthUser} from "@/app/api/auth/[...nextauth]/authOptions";
import {getServerSession} from "next-auth/next";

interface HeaderProps {
  user: TUser | null
}

const Header: FC<HeaderProps> = ({user}) => {
  const {toast} = useToast()
  const {data: session, status, update} = useSession()

  const currentPath = usePathname()
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const isLogin = CRouters.some((router) => currentPath.includes(router.path))

  const toggleMenu = () => {
    setTimeout(() => {
      setIsDropdownOpen(!isDropdownOpen)
    }, 200)
  }

  const logout = () => {
    axios
      .post(
        LOGOUT_URL,
        {},
        {
          headers: {
            Authorization: `Bearer ${session?.user?.token}`,
            Accept: "application/json",
          },
        },
      )
      .then((res) => {
        if (res?.status === 200) {
          signOut({redirect: true, callbackUrl: "/"})
          toast({title: "Logged out successfully!"})
        }
      })
      .catch((err) => {
        signOut({redirect: true, callbackUrl: "/"})
      })
  }

  useEffect(() => {
    if (isDropdownOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
  }, [isDropdownOpen])

  return isLogin ? (
    <header id="header" className="bg-white sticky z-30 top-0 left-0 right-0 border">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        <Link href="/" className="flex justify-center w-30 lg:w-[8%]">
          <Logo />
        </Link>
        <div className="hidden lg:block">
          <div className="items-center justify-between md:gap-12 text-lg hidden lg:flex">
            {CHeaderNavs.map((value) => (
              <Link key={value.id.toString()} href={value.href} className="flex flex-col gap-5">
                <p className="text-black font-semibold">{value.value}</p>
              </Link>
            ))}
            <div
              className="cursor-pointer text-sm"
              onClick={() => {
                toast({
                  variant: "success",
                  title: "Scheduled: Catch up",
                  description: "test",
                })
              }}
            >
              TOAST (test)
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <DropdownMenu open={isNavOpen} onOpenChange={setIsNavOpen}>
            <DropdownMenuTrigger asChild>
              <div className="cursor-pointer flex items-center gap-2">
                <UserCircleIcon className="h-8 w-8 text-brand-primary" />
                <span className="font-semibold">ME</span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuLabel className="text-xs font-semibold text-gray-500">
                {session?.user?.first_name} {session?.user?.last_name}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <Link href={"/profile"} onClick={() => setIsNavOpen(false)}>
                  <DropdownMenuItem>
                    <UserIcon className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={logout}>
                <ArrowRightStartOnRectangleIcon className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="lg:hidden">
          <div
            className="flex flex-col justify-between w-8 h-6 bg-transparent border-none outline-none cursor-pointer"
            onClick={() => {
              setIsDropdownOpen(!isDropdownOpen)
            }}
          >
            <span
              className={`block w-7 rounded h-1 bg-gray-700 transition-transform duration-300 ${isDropdownOpen ? "transform rotate-45 translate-y-2.5" : ""}`}
            />
            <span
              className={`block w-7 rounded h-1 bg-gray-700 transition-opacity duration-300 ${isDropdownOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-7 rounded h-1 bg-gray-700 transition-transform duration-300 ${isDropdownOpen ? "transform -rotate-45 -translate-y-2.5" : ""}`}
            />
          </div>
        </div>
      </div>
      {isDropdownOpen && (
        <nav className="lg:hidden absolute text-sm right-0 left-0 flex flex-col border-t min-h-screen bg-gray-100 shadow-lg">
          {CHeaderNavs.map((value, index) => (
            <Link
              onClick={() => {
                toggleMenu()
              }}
              key={value.id.toString()}
              href={value.href}
              className={cn(CHeaderNavs.length === index + 1 && "mb-4", "p-4 border-b bg-white shadow-md")}
            >
              <p className="text-black font-semibold">{value.value}</p>
            </Link>
          ))}
          <Link
            href={"/profile"}
            onClick={() => {
              toggleMenu()
            }}
            className="p-4 border-b bg-white shadow-md"
          >
            <p className="text-black font-semibold">Profile</p>
          </Link>
          <Link
            href={"/"}
            onClick={() => {
              toggleMenu()
            }}
            className="p-4 border-b bg-white shadow-md"
          >
            <p className="text-black font-semibold">Sign out</p>
          </Link>
        </nav>
      )}
    </header>
  ) : (
    <header />
  )
}

export default Header
