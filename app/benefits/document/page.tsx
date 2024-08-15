import type React from "react"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/Card"
import Link from "next/link"

const Document: React.FC = () => {
  return (
    <Card className="shadow-brand-primary h-full">
      <CardHeader>
        <CardTitle>Policy Documents</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg lg:text-xl font-semibold">FAQ and other Information</p>
        <ul className="list-disc list-inside my-3 space-y-1">
          <li>
            <Link href={""} className="font-medium text-brand-primary hover:underline">
              Need Help on Pacific Prime PCM Portal
            </Link>
          </li>
          <li>
            <Link href={""} className="font-medium text-brand-primary hover:underline">
              PCM Portal User Guide
            </Link>
          </li>
          <li>
            <Link href={""} className="font-medium text-brand-primary hover:underline">
              PCM Mobile App User Guide
            </Link>
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}

export default Document
