"use client"

import type React from "react"
import dynamic from "next/dynamic"
import {usePage} from "@/components/Layouts/DashboardContext"

const CreatePage = dynamic(() => import("./create/page"), {
  ssr: false,
})
const TrackPage = dynamic(() => import("./track/page"), {
  ssr: false,
})
const OverviewPage = dynamic(() => import("./overview/page"), {
  ssr: false,
})
const DocumentPage = dynamic(() => import("./document/page"), {
  ssr: false,
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
