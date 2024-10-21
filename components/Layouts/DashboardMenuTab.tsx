import type React from "react"
import {Card, CardContent} from "@/components/ui/Card"
import {cn} from "@/lib/utils"
import {useEffect} from "react"
import Link from "next/link"
import {usePathname} from "next/navigation"

interface IMenuItem {
  key: string
  name: string
  event: () => void
}

interface MenuItem {
  key: string
  name: string
  children?: IMenuItem[] | []
  event: () => void
}

interface DashboardMenuTabProps {
  menu: MenuItem[] | []
  current: string | null
}

const DashboardMenuTab: React.FC<DashboardMenuTabProps> = ({menu, current}: DashboardMenuTabProps) => {
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
      <Card className="lg:min-h-32 sticky shadow-brand-primary">
        <CardContent className="flex flex-col gap-y-6 text-base font-semibold">
          {menu.map((value, index) => (
            <div key={index.toString()}>
              {typeof value.children === "undefined" ? (
                <Link
                  href={`/${currentPath.split("/")[1] ?? "dashboard"}`}
                  onClick={value.event}
                  className={cn(current === value.key && "text-brand-primary", "cursor-pointer hover:underline")}
                >
                  {value.name}
                </Link>
              ) : (
                <div>
                  <p>{value.name}</p>
                  <ul className="list-disc list-inside mt-3 ml-1 space-y-2">
                    {value.children.map((children, index2) => (
                      <li key={index2.toString()}>
                        <Link
                          href={`/${currentPath.split("/")[1] ?? "dashboard"}`}
                          onClick={children.event}
                          className={cn(
                            current === children.key && "text-brand-primary",
                            "cursor-pointer hover:underline",
                          )}
                        >
                          {children.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

export default DashboardMenuTab
