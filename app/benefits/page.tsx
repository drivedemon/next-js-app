"use client"

import type React from "react"
import dynamic from "next/dynamic"
import {usePage} from "@/components/Layouts/DashboardContext"
import DocumentLoading from "@/app/benefits/document/loading"
import CreateLoading from "@/app/benefits/create/loading"
import OverviewLoading from "@/app/benefits/overview/loading"
import SummaryLoading from "@/app/benefits/summary/loading"

const DocumentPage = dynamic(() => import("./document/page"), {
  ssr: false,
  loading: () => <DocumentLoading />,
})
const OverviewPage = dynamic(() => import("./overview/page"), {
  ssr: false,
  loading: () => <OverviewLoading />,
})
const CreatePage = dynamic(() => import("./create/page"), {
  ssr: false,
  loading: () => <CreateLoading />,
})
const SummaryPage = dynamic(() => import("./summary/page"), {
  ssr: false,
  loading: () => <SummaryLoading />,
})

const BenefitPage: React.FC = () => {
  const {isPage} = usePage()

  let mainContent: React.JSX.Element
  switch (isPage) {
    case "benefit_document":
      mainContent = <DocumentPage />
      break
    case "benefit_overview":
      mainContent = <OverviewPage />
      break
    // case "create":
    //   mainContent = <CreatePage />
    //   break
    // case "summary":
    //   mainContent = <SummaryPage />
    //   break
    default:
      mainContent = <OverviewPage />
  }

  return <>{mainContent}</>
}

export default BenefitPage
