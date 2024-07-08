import type React from "react"
import {Skeleton} from "@/components/ui/Skeleton";
import {CardContent, CardHeader, CardTitle} from "@/components/ui/Card";

const OverviewLoading: React.FC = () => {
  return (
    <>
      <CardHeader>
        <CardTitle>
          <div className="flex flex-col lg:flex-row gap-4 justify-between">
            <Skeleton className="h-8 w-3/4 rounded-xl bg-slate-200" />
            <Skeleton className="h-8 w-1/4 rounded-xl bg-slate-200" />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="lg:py-3">
          <Skeleton className="h-12 w-full rounded-xl bg-slate-200" />
          <div className="py-8">
            <Skeleton className="h-8 w-1/3 rounded-xl bg-slate-200" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2">
              <Skeleton className="h-6 w-1/3 rounded-xl bg-slate-200" />
              <Skeleton className="h-6 w-4/12 rounded-xl bg-slate-200" />
            </div>
            <div className="flex flex-row gap-2">
              <Skeleton className="h-6 w-1/3 rounded-xl bg-slate-200" />
              <Skeleton className="h-6 w-6/12 rounded-xl bg-slate-200" />
            </div>
            <div className="flex flex-row gap-2">
              <Skeleton className="h-6 w-1/3 rounded-xl bg-slate-200" />
              <Skeleton className="h-6 w-4/12 rounded-xl bg-slate-200" />
            </div>
            <div className="flex flex-row gap-2">
              <Skeleton className="h-6 w-1/3 rounded-xl bg-slate-200" />
              <Skeleton className="h-6 w-5/12 rounded-xl bg-slate-200" />
            </div>
            <div className="flex flex-row gap-2">
              <Skeleton className="h-6 w-1/3 rounded-xl bg-slate-200" />
              <Skeleton className="h-6 w-7/12 rounded-xl bg-slate-200" />
            </div>
          </div>
          <div className="py-8">
            <Skeleton className="h-8 w-2/4 rounded-xl bg-slate-200" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2">
              <Skeleton className="h-6 w-1/3 rounded-xl bg-slate-200" />
              <Skeleton className="h-6 w-4/12 rounded-xl bg-slate-200" />
            </div>
            <div className="flex flex-row gap-2">
              <Skeleton className="h-6 w-1/3 rounded-xl bg-slate-200" />
              <Skeleton className="h-6 w-6/12 rounded-xl bg-slate-200" />
            </div>
            <div className="flex flex-row gap-2">
              <Skeleton className="h-6 w-1/3 rounded-xl bg-slate-200" />
              <Skeleton className="h-6 w-3/12 rounded-xl bg-slate-200" />
            </div>
            <div className="flex flex-row gap-2">
              <Skeleton className="h-6 w-1/3 rounded-xl bg-slate-200" />
              <Skeleton className="h-6 w-5/12 rounded-xl bg-slate-200" />
            </div>
            <div className="flex flex-row gap-2">
              <Skeleton className="h-6 w-1/3 rounded-xl bg-slate-200" />
              <Skeleton className="h-6 w-7/12 rounded-xl bg-slate-200" />
            </div>
          </div>
        </div>
      </CardContent>
    </>
  )
}

export default OverviewLoading
