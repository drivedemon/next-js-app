"use client"

import type {FC} from "react"
import type React from "react"
import {Card, CardContent} from "@/components/ui/Card"
import {FileCheck2} from "lucide-react"
import {Button} from "@/components/Forms/Button"
import {usePage} from "@/components/Layouts/DashboardContext"

interface ClaimSuccessfullyProps extends React.HTMLAttributes<HTMLElement> {
  handleSubmit: () => void
}

const ClaimSuccessfullyForm: FC<ClaimSuccessfullyProps> = (props: ClaimSuccessfullyProps) => {
  const {setPage} = usePage()

  const onSubmit = () => {
    props.handleSubmit()
  }

  return (
    <Card className={props.className}>
      <CardContent className="py-10 flex flex-col gap-y-8 items-center justify-center">
        <FileCheck2 className="w-20 h-20 text-brand-primary" />
        <p className="text-xl lg:text-2xl font-bold text-brand-primary text-center mb-8">
          This Claim has been submitted successfully.
        </p>
        <div className="flex text-sm lg:text-base flex-col items-center text-center gap-y-1">
          <p>Please keep your original receipt for audit purposes.</p>
          <p>You can track your claim status or Edit claim information under Track claims page.</p>
        </div>
        <div className="flex flex-col lg:flex-row text-sm lg:text-base items-center justify-center w-full gap-4">
          <Button variant="outline" className="w-full lg:w-fit" onClick={onSubmit}>
            Submit Another Claim
          </Button>
          <Button
            variant="primary"
            className="w-full lg:w-fit"
            onClick={() => {
              setPage("claim_track")
            }}
          >
            Track My Claim
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ClaimSuccessfullyForm
