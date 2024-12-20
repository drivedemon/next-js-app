import type React from "react"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/Card"
import Link from "next/link"

const Overview: React.FC = () => {
  return (
    <Card className="shadow-brand-primary h-full">
      <CardHeader>
        <CardTitle>Benefit Coverage Documents</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg lg:text-xl font-semibold">FAQ and other Information</p>
        <ul className="list-disc list-inside my-3 space-y-1">
          <li>
            <Link href={""} className="font-medium text-brand-primary hover:underline">
              Health Coverage
            </Link>
          </li>
          <li>
            <Link href={""} className="font-medium text-brand-primary hover:underline">
              Life Coverage
            </Link>
          </li>
          <li>
            <Link href={""} className="font-medium text-brand-primary hover:underline">
              (Group) Health Coverage
            </Link>
          </li>
          <li>
            <Link href={""} className="font-medium text-brand-primary hover:underline">
              (Group) Life Coverage
            </Link>
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}

export default Overview
