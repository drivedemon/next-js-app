import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/Card"
import type React from "react"
import Link from "next/link"

const Clinic: React.FC = () => {
  return (
    <Card className="shadow-brand-primary h-full">
      <CardHeader>
        <CardTitle>Clinic Documents</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg lg:text-xl font-semibold">FAQ and other Information</p>
        <ul className="list-disc list-inside my-3 space-y-1">
          <li>
            <Link href={""} className="font-medium text-brand-primary hover:underline">
              HK Clinics
            </Link>
          </li>
          <li>
            <Link href={""} className="font-medium text-brand-primary hover:underline">
              TH Clinics
            </Link>
          </li>
          <li>
            <Link href={""} className="font-medium text-brand-primary hover:underline">
              International Clinics
            </Link>
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}

export default Clinic
