"use client"

import React, {Suspense} from "react"
import dynamic from "next/dynamic"
import {usePage} from "@/components/Layouts/DashboardContext"
import DocumentLoading from "@/app/benefits/document/loading";
import DefaultLoading from "@/app/benefits/loading";
import CreateLoading from "@/app/benefits/create/loading";
import OverviewLoading from "@/app/benefits/overview/loading";
import SummaryLoading from "@/app/benefits/summary/loading";
import {Card} from "@/components/ui/Card";

const CreatePage = dynamic(() => import("./create/page"), {
  ssr: false,
  loading: () => <CreateLoading />,
})
const DocumentPage = dynamic(() => import("./document/page"), {
  ssr: false,
  loading: () => <DocumentLoading />,
})
const OverviewPage = dynamic(() => import("./overview/page"), {
  ssr: false,
  loading: () => <OverviewLoading />,
})
const SummaryPage = dynamic(() => import("./summary/page"), {
  ssr: false,
  loading: () => <SummaryLoading />,
})

const BenefitPage: React.FC = () => {
  const {isPage} = usePage()

  let mainContent: React.JSX.Element
  switch (isPage) {
    case "create":
      mainContent = <CreatePage />
      break
    case "document":
      mainContent = <DocumentPage />
      break
    case "overview":
      mainContent = <OverviewPage />
      break
    case "summary":
      mainContent = <SummaryPage />
      break
    default:
      mainContent = <div>Select a page from the Left side Menu</div>
  }

  return (
    <Card className="shadow-brand-primary h-full">
      <Suspense fallback={<DefaultLoading />}>{mainContent}</Suspense>
    </Card>
  )
}

export default BenefitPage
