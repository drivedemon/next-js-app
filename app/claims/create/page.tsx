"use client"

import type React from "react"
import {useState} from "react"
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/Card"
import Stepper from "@/components/ui/Stepper"
import {cn} from "@/lib/utils"
import {Button} from "@/components/Forms/Button"
import ClaimInformationForm from "@/components/Claims/Forms/ClaimInformationForm"
import ClaimUploadForm, {type IUploadForm} from "@/components/Claims/Forms/ClaimUploadForm"
import ClaimDetailForm from "@/components/Claims/Forms/ClaimDetailForm"
import ClaimReviewForm from "@/components/Claims/Forms/ClaimReviewForm"
import ClaimSuccessfullyForm from "@/components/Claims/Forms/ClaimSuccessfullyForm"

const Create: React.FC = () => {
  const steps = ["Select Claim Type", "Add Receipt and Referral", "Claim Detail", "Review Claim"]
  const [currentStep, setStep] = useState<number>(1)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [formData, setFormData] = useState<IUploadForm>({
    file: null,
    filePreview: null,
    multipleFile: [],
    multipleFilePreview: [],
  })

  const handleUploadForm = (data: IUploadForm): void => {
    setFormData(data)
  }

  const handleSubmitForm = (): void => {
    setIsSubmitted(true)
  }

  const handleSubmitAnotherClaim = (): void => {
    setFormData({
      file: null,
      filePreview: null,
      multipleFile: [],
      multipleFilePreview: [],
    })
    setStep(1)
    setIsSubmitted(false)
  }

  return (
    <>
      {!isSubmitted ? (
        <Card className="shadow-brand-primary h-full">
          <CardHeader>
            <CardTitle>{steps[currentStep - 1]}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-y-8">
            <Stepper steps={steps} currentStep={currentStep} />

            {/*Claim information Page1*/}
            <ClaimInformationForm currentStep={currentStep} />

            {/*File upload Page2*/}
            <ClaimUploadForm currentStep={currentStep} onSubmit={handleUploadForm} />

            {/*Claim detail Page3*/}
            <ClaimDetailForm currentStep={currentStep} />

            {/*Review Page4*/}
            <ClaimReviewForm currentStep={currentStep} steps={steps} formData={formData} />
          </CardContent>
          <CardFooter className="mt-4 lg:mt-0 flex flex-col-reverse lg:flex-row gap-3 lg:justify-center">
            <Button
              variant="outline"
              className={cn(currentStep === 1 && "hidden", "w-full lg:w-fit border-brand-primary text-brand-primary")}
              onClick={() => {
                setStep(currentStep === steps.length ? 2 : currentStep - 1)
              }}
            >
              {currentStep === steps.length ? "Edit" : "Previous"}
            </Button>
            <Button
              variant="primary"
              className={currentStep === steps.length ? "hidden" : "block w-full lg:w-fit "}
              onClick={() => {
                setStep(currentStep + 1)
              }}
            >
              {currentStep === 1 ? "Proceed" : currentStep === 2 ? "Verify Claim information" : "Preview"}
            </Button>
            <Button
              variant="success"
              className={currentStep === steps.length ? "block w-full lg:w-fit" : "hidden"}
              onClick={handleSubmitForm}
            >
              Confirm
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <ClaimSuccessfullyForm handleSubmit={handleSubmitAnotherClaim} className={isSubmitted ? "block" : "hidden"} />
      )}
    </>
  )
}

export default Create
