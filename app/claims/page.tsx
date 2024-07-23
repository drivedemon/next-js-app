"use client"

import type React from "react"
import dynamic from "next/dynamic"
import {usePage} from "@/components/Layouts/DashboardContext"
import {Card} from "@/components/ui/Card"
import {Suspense} from "react"
import DefaultClaimLoading from "@/app/claims/loading"
import CreateLoading from "@/app/claims/create/loading"
import TrackLoading from "@/app/claims/track/loading"
import OverviewLoading from "@/app/claims/overview/loading"
import DocumentLoading from "@/app/claims/document/loading"

const CreatePage = dynamic(() => import("./create/page"), {
  ssr: false,
  loading: () => <CreateLoading />,
})
const TrackPage = dynamic(() => import("./track/page"), {
  ssr: false,
  loading: () => <TrackLoading />,
})
const OverviewPage = dynamic(() => import("./overview/page"), {
  ssr: false,
  loading: () => <OverviewLoading />,
})
const DocumentPage = dynamic(() => import("./document/page"), {
  ssr: false,
  loading: () => <DocumentLoading />,
})

const ClaimPage: React.FC = () => {
  const {isPage} = usePage()

  let mainContent: React.JSX.Element
  switch (isPage) {
    case "create":
      mainContent = <CreatePage />
      break
    case "track":
      mainContent = <TrackPage />
      break
    case "overview":
      mainContent = <OverviewPage />
      break
    case "document":
      mainContent = <DocumentPage />
      break
    default:
      mainContent = <div>Select a page from the Left side Menu</div>
  }

  return <>{mainContent}</>
}

export default ClaimPage
