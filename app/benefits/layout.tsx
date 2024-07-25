"use client"

import type React from "react"
import type {ReactNode} from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/Breadcrumb"
import {Slash} from "lucide-react"
import DashboardLayout from "@/components/Layouts/DashboardLayout"
import {usePage} from "@/components/Layouts/DashboardContext"
import DashboardContent from "@/components/Layouts/DashboardContent"
import DashboardMenuTab from "@/components/Layouts/DashboardMenuTab"
import {useLayoutEffect} from "react"

interface ParallelLayoutProps {
  children: ReactNode
}

const BenefitsLayout: React.FC<ParallelLayoutProps> = ({children}) => {
  const {isPage, setPage} = usePage()
  const menuTab = [
    {key: "benefit_overview", name: "Benefits Coverage", event: () => setPage("benefit_overview")},
    {key: "benefit_document", name: "Policy Documents", event: () => setPage("benefit_document")},
    // {key: "create", name: "Benefits Selection", event: () => setPage("create")},
    // {key: "summary", name: "Total Rewards Statement", event: () => setPage("summary")},
  ]

  useLayoutEffect(() => {
    setPage(isPage?.includes("benefit") ? isPage : "benefit_overview")
  }, [])

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-y-4 mb-6 lg:mx-8">
        <p className="font-bold text-4xl">Benefits</p>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <p>Home</p>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/benefits">Benefits</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <DashboardContent menuTab={<DashboardMenuTab menu={menuTab} current={isPage} />}>{children}</DashboardContent>
    </DashboardLayout>
  )
}

export default BenefitsLayout
