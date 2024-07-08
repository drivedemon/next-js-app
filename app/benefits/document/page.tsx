import type React from "react"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/Card"
import Link from "next/link"

const Document: React.FC = () => {
  return (
    <>
      <CardHeader>
        <CardTitle>Benefit Documents</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg lg:text-xl font-semibold">FAQ and other Information</p>
        <ul className="list-disc list-inside my-3 space-y-1">
          <li>
            <Link href={""} className="font-medium text-brand-primary hover:underline">
              Need Help on Pacific Prime CXA Portal
            </Link>
          </li>
          <li>
            <Link href={""} className="font-medium text-brand-primary hover:underline">
              PPCXA Portal User Guide
            </Link>
          </li>
          <li>
            <Link href={""} className="font-medium text-brand-primary hover:underline">
              PPCXA Mobile App User Guide
            </Link>
          </li>
        </ul>
      </CardContent>
    </>
  )
}

export default Document
