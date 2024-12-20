import type React from "react"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/Card"
import {Skeleton} from "@/components/ui/Skeleton"

const TrackLoading: React.FC = () => {
  return (
    <Card className="shadow-brand-primary h-full">
      <CardHeader>
        <CardTitle className="flex flex-col gap-4 lg:gap-8">
          <Skeleton className="h-6 lg:h-8 w-2/3 lg:w-1/3 bg-slate-200" />
          <Skeleton className="h-6 lg:h-8 w-1/3 lg:w-2/4 bg-slate-200" />
          <div className="flex flex-col gap-2 lg:hidden">
            <Skeleton className="h-6 lg:h-8 w-full lg:w-2/4 bg-slate-200" />
            <Skeleton className="h-6 lg:h-8 w-5/6 lg:w-2/4 bg-slate-200" />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="my-4 flex flex-col gap-8">
        <Skeleton className="h-14 lg:h-20 w-3/4 lg:w-2/3 bg-slate-200" />
        <div className="space-y-2">
          <Skeleton className="h-5 lg:h-6 w-8/12 lg:w-6/12 bg-slate-200" />
          <Skeleton className="h-5 lg:h-6 w-6/12 lg:w-4/12 bg-slate-200" />
          <Skeleton className="h-5 lg:h-6 w-10/12 lg:w-10/12 bg-slate-200" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-5 lg:h-6 w-8/12 lg:w-6/12 bg-slate-200" />
          <Skeleton className="h-5 lg:h-6 w-6/12 lg:w-4/12 bg-slate-200" />
          <Skeleton className="h-5 lg:h-6 w-10/12 lg:w-10/12 bg-slate-200" />
        </div>
      </CardContent>
    </Card>
  )
}

export default TrackLoading
