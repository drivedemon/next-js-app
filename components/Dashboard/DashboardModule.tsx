"use client"

import type React from "react"
import type {FC} from "react"
import Link from "next/link"
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/Card"
import {usePage} from "@/components/Layouts/DashboardContext"
import type {TDashboardConstant, TDashboardModule} from "@/types/Dashboard"
import {CDashboard} from "@/components/Dashboard/constants"

type ModulesProps = {
  modules: TDashboardModule[] | null
}

const DashboardModule: FC<ModulesProps> = ({modules}) => {
  const {setPage} = usePage()
  const getCModule = (moduleName: string): TDashboardConstant | undefined => {
    return CDashboard.find((cModule: TDashboardConstant) => cModule.key === moduleName)
  }

  if (!modules || modules.length === 0) {
    return <p className="col-span-6 lg:col-span-4">No module available</p>
  }

  return (
    <>
      {modules.map((module: TDashboardModule) => {
        const cModule: TDashboardConstant | undefined = getCModule(module.module_name)

        if (!cModule) {
          return
        }

        return (
          <div className="col-span-6 lg:col-span-4" key={module.module_name}>
            <Link href={cModule.href} onClick={() => setPage(cModule.page)}>
              <Card className="border-brand-secondary hover:drop-shadow-sm cursor-pointer h-full">
                <CardHeader className="px-0">
                  <CardTitle className="flex gap-x-2">
                    <cModule.icon className="text-brand-primary" />
                    <span className="text-lg font-semibold">{cModule.value}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <p className="text-sm">No description available</p>
                </CardContent>
                <CardFooter />
              </Card>
            </Link>
          </div>
        )
      })}
    </>
  )
}

export default DashboardModule
