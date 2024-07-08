import type React from "react"
import {Card, CardContent} from "@/components/ui/Card"
import {cn} from "@/lib/utils"
import {useEffect} from "react"
import Link from "next/link"
import {usePathname} from "next/navigation"

interface MenuItem {
  key: string
  name: string
  event: () => void
}

interface DashboardMenuTabProps {
  menu: MenuItem[] | []
  current: string | null
}

const DashboardMenuTab: React.FC<DashboardMenuTabProps> = ({menu, current}) => {
  const currentPath = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header")
      const menuSide = document.getElementById("menuSide")

      if (!header || !menuSide) {
        return
      }

      if (header.getBoundingClientRect().bottom > menuSide.getBoundingClientRect().top) {
        const firstChild = menuSide.firstElementChild as HTMLElement | null
        if (firstChild) {
          firstChild.style.top = `${header.getBoundingClientRect().bottom + 20}px`
        }
        document.removeEventListener("scroll", handleScroll)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div id="menuSide" className="lg:col-span-3 lg:px-4 h-full flex flex-col lg:border-r border-gray-300">
      <Card className="sticky shadow-brand-primary">
        <CardContent className="flex flex-col gap-y-6 text-base font-semibold">
          {menu.map((value, index) => (
            <div
              key={index.toString()}
              className={cn(current === value.key ? "text-brand-primary" : "hover:underline")}
            >
              <Link
                href={`/${currentPath.split("/")[1] ?? "dashboard"}`}
                onClick={value.event}
                className="cursor-pointer"
              >
                {value.name}
              </Link>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

export default DashboardMenuTab
