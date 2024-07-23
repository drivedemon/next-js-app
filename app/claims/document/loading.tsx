import type React from "react"
import {Skeleton} from "@/components/ui/Skeleton"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/Card"

const DocumentLoading: React.FC = () => {
  return (
    <Card className="shadow-brand-primary h-full">
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-6 lg:h-8 w-2/3 lg:w-1/3 bg-slate-200" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-6 lg:h-8 w-3/4 lg:w-2/3 bg-slate-200" />
        <div className="my-3 space-y-2">
          <Skeleton className="h-5 lg:h-6 w-8/12 lg:w-6/12 bg-slate-200" />
          <Skeleton className="h-5 lg:h-6 w-6/12 lg:w-4/12 bg-slate-200" />
          <Skeleton className="h-5 lg:h-6 w-10/12 lg:w-10/12 bg-slate-200" />
        </div>
      </CardContent>
    </Card>
  )
}

export default DocumentLoading
