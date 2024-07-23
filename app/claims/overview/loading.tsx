import type React from "react"
import {Skeleton} from "@/components/ui/Skeleton"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/Card"

const OverviewLoading: React.FC = () => {
  return (
    <Card className="shadow-brand-primary h-full">
      <CardHeader>
        <CardTitle>
          <div className="flex flex-col lg:flex-row gap-4 justify-between">
            <Skeleton className="h-8 w-3/4 bg-slate-200" />
            <Skeleton className="h-8 w-1/4 bg-slate-200" />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="lg:py-3">
          <Skeleton className="h-12 w-full bg-slate-200" />
          <div className="py-4">
            <Skeleton className="h-8 w-4/12 bg-slate-200" />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-6 w-7/12 bg-slate-200" />
            <Skeleton className="h-6 w-10/12 bg-slate-200" />
            <Skeleton className="h-6 w-8/12 bg-slate-200" />
            <Skeleton className="h-6 w-9/12 bg-slate-200" />
            <Skeleton className="h-6 w-11/12 bg-slate-200" />
          </div>
          <div className="py-8">
            <Skeleton className="h-8 w-6/12 bg-slate-200" />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-6 w-7/12 bg-slate-200" />
            <Skeleton className="h-6 w-8/12 bg-slate-200" />
            <Skeleton className="h-6 w-12/12 bg-slate-200" />
            <Skeleton className="h-6 w-5/12 bg-slate-200" />
            <Skeleton className="h-6 w-9/12 bg-slate-200" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default OverviewLoading
