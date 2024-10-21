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
import {useLayoutEffect} from "react"
import {usePage} from "@/components/Layouts/DashboardContext"

interface ParallelLayoutProps {
  children: ReactNode
}

const ClinicsPageLayout: React.FC<ParallelLayoutProps> = ({children}) => {
  const {setPage} = usePage()

  useLayoutEffect(() => {
    setPage(null)
  }, [])

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-y-4 mb-6 lg:mx-8">
        <p className="font-bold text-4xl">Clinics</p>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <p>Home</p>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/clinics">Clinics</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-col gap-y-4 mb-6 lg:mx-8">{children}</div>
    </DashboardLayout>
  )
}

export default ClinicsPageLayout
