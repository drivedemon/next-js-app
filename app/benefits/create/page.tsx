"use client"

import type React from "react"
import {useEffect, useState} from "react"
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/Card"
import Stepper from "@/components/ui/Stepper"
import {Button} from "@/components/Forms/Button"
import {cn, moneyDecimal} from "@/lib/utils"
import {Progress} from "@/components/ui/Progress"
import {ChevronUp, CircleCheck, CircleHelp, FileText} from "lucide-react"
import {Badge} from "@/components/ui/Badge"
import {CBenefitSelections} from "@/types/Benefit"
import {Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow} from "@/components/Forms/Table"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/Tooltip"
import {Checkbox} from "@/components/Forms/Checkbox"
import {Label} from "@/components/Forms/Label"

type TPlanFormType = {
  benefitId: number
  planValue: number | null
  optionValue: number | null
  parentBenefit: number | null
  childBenefit: number | null
}

type TFormType = {
  available: number
  used: number
  plans: TPlanFormType[]
}

type TBenefitToggleType = {
  id: number
  isToggle: boolean
  isDetailToggle: boolean
}

type ToggleType = {
  benefits: TBenefitToggleType[]
}

const Create: React.FC = () => {
  const [isOpenSelection, setIsOpenSelection] = useState(false)
  const [currentStep, setStep] = useState(1)
  const [benefitToggles, setBenefitToggles] = useState<ToggleType>({
    benefits: [],
  })
  const [formData, setFormData] = useState<TFormType>({
    available: 5000,
    used: 0,
    plans: [] as TPlanFormType[],
  })
  const steps = ["Convert Leaves", "Risk Benefit", "Medical Benefit", "Additional Benefit", "Review"]

  const getCurrentPlan = (benefitId: number | null): TPlanFormType | null => {
    const currentPlan = formData.plans.find((plan) => plan.benefitId === benefitId)

    return currentPlan ? currentPlan : null
  }

  const getBenefit = (benefitId: number) => {
    return CBenefitSelections.find((benefit) => benefit.id === benefitId)
  }

  const getPlan = (benefitId: number, planId: number) => {
    return getBenefit(benefitId)?.plans.find((plan) => plan.id === planId)
  }

  const getOption = (benefitId: number, planId: number, optionId: number) => {
    return getPlan(benefitId, planId)?.options.find((option) => option.id === optionId)
  }

  const getCurrentToggle = (benefitId: number): TBenefitToggleType | null => {
    const currentBenefit = benefitToggles.benefits.find((benefit) => benefit.id === benefitId)

    return currentBenefit ? currentBenefit : null
  }

  useEffect(() => {
    const initialPlans = CBenefitSelections.map((benefit) => {
      const defaultPlan = benefit.plans.find((plan) => plan.default)
      return {
        benefitId: benefit.id,
        planValue: defaultPlan ? defaultPlan.id : null,
        optionValue: defaultPlan?.options ? defaultPlan.options[0]?.id ?? null : null,
        parentBenefit: benefit.parentBenefitId,
        childBenefit: benefit.childBenefitId,
      }
    })

    const initialToggleCBenefitSelections = CBenefitSelections.map((benefit) => {
      return {
        id: benefit.id,
        isToggle: true,
        isDetailToggle: false,
      }
    })

    setFormData((prevState) => ({
      ...prevState,
      plans: initialPlans,
    }))

    setBenefitToggles((prevState) => ({
      ...prevState,
      benefits: initialToggleCBenefitSelections,
    }))
  }, [])

  const updatePlanValue = (benefitId: number, newValue: number) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        plans: prevState.plans.map((plan) => {
          if (plan.benefitId === benefitId) {
            if (plan.optionValue !== null) {
              const benefitSelection = CBenefitSelections.find((benefit) => benefit.id === benefitId)
              if (!benefitSelection) {
                return plan
              }

              const previousPlanSelection = benefitSelection.plans.find(
                (previousPlan) => previousPlan.id === plan.planValue,
              )
              const currentPlanSelection = benefitSelection.plans.find((currentPlan) => currentPlan.id === newValue)
              if (!previousPlanSelection || !currentPlanSelection) {
                return plan
              }

              const currentIndexOptionSelection = previousPlanSelection.options.findIndex(
                (option) => option.id === plan.optionValue,
              )
              if (currentIndexOptionSelection === -1) {
                return plan
              }

              const currentOptionSelection = currentPlanSelection.options[currentIndexOptionSelection]
              if (!currentOptionSelection) {
                return plan
              }

              return {...plan, planValue: newValue, optionValue: currentOptionSelection.id}
            }
            return {...plan, planValue: newValue}
          }

          if (plan.parentBenefit !== null) {
            const benefitSelection = CBenefitSelections.find((benefit) => benefit.id === benefitId)
            const currentSelection = CBenefitSelections.find((benefit) => benefit.id === plan.benefitId)

            if (!benefitSelection || !currentSelection) {
              return plan
            }

            const parentPlanIndexSelection = benefitSelection.plans.findIndex((plan) => plan.id === newValue)
            const currentPlanSelection = currentSelection.plans[parentPlanIndexSelection]

            if (parentPlanIndexSelection === -1 || !currentPlanSelection) {
              return plan
            }

            const previousPlanSelection = currentSelection.plans.find(
              (previousPlan) => previousPlan.id === plan.planValue,
            )
            if (!previousPlanSelection) {
              return {...plan, planValue: currentPlanSelection.id}
            }

            const previousOptionIndexSelection = previousPlanSelection.options.findIndex(
              (option) => option.id === plan.optionValue,
            )
            if (previousOptionIndexSelection === -1) {
              return {...plan, planValue: currentPlanSelection.id}
            }

            return {
              ...plan,
              planValue: currentPlanSelection.id,
              optionValue: currentPlanSelection.options[previousOptionIndexSelection].id,
            }
          }

          return plan
        }),
      }
    })
  }

  const updateOptionValue = (benefitId: number, newValue: number) => {
    setFormData((prevState) => ({
      ...prevState,
      plans: prevState.plans.map((plan) => (plan.benefitId === benefitId ? {...plan, optionValue: newValue} : plan)),
    }))
  }

  const handlePlanUpdate = (benefitId: number, newValue: number, parentBenefitId: number | null) => {
    if (parentBenefitId !== null) {
      return
    }

    updatePlanValue(benefitId, newValue)
  }

  const handleOptionUpdate = (
    benefitId: number,
    newValue: number,
    parentBenefitId: number | null,
    childBenefitId: number | null,
  ) => {
    if (parentBenefitId !== null) {
      const parentPlanSelection = getCurrentPlan(parentBenefitId)
      const parentBenefit = CBenefitSelections.find((benefit) => benefit.id === parentBenefitId)
      const parentPlan = parentBenefit?.plans.find((plan) => plan.id === parentPlanSelection?.planValue)
      const parentIndexOption =
        parentPlan?.options.findIndex((option) => option.id === parentPlanSelection?.optionValue) ?? -1

      if (parentIndexOption === -1) {
        return
      }

      const currentPlanSelection = getCurrentPlan(benefitId)
      const currentBenefit = CBenefitSelections.find((benefit) => benefit.id === benefitId)
      const currentPlan = currentBenefit?.plans.find((plan) => plan.id === currentPlanSelection?.planValue)
      const currentIndexOption = currentPlan?.options.findIndex((option) => option.id === newValue) ?? -1

      if (currentIndexOption > parentIndexOption) {
        return
      }

      updateOptionValue(benefitId, newValue)
    }

    if (childBenefitId !== null) {
      updateOptionValue(benefitId, newValue)

      const childPlanSelection = getCurrentPlan(childBenefitId)
      const childBenefit = CBenefitSelections.find((benefit) => benefit.id === childBenefitId)
      const childPlan = childBenefit?.plans.find((plan) => plan.id === childPlanSelection?.planValue)
      const childIndexOption =
        childPlan?.options.findIndex((option) => option.id === childPlanSelection?.optionValue) ?? -1

      if (childIndexOption === -1 || !childPlan) {
        return
      }

      const currentPlanSelection = getCurrentPlan(benefitId)
      const currentBenefit = CBenefitSelections.find((benefit) => benefit.id === benefitId)
      const currentPlan = currentBenefit?.plans.find((plan) => plan.id === currentPlanSelection?.planValue)
      const currentIndexOption = currentPlan?.options.findIndex((option) => option.id === newValue) ?? -1

      if (currentIndexOption < childIndexOption) {
        updateOptionValue(childBenefitId, childPlan?.options[0].id)
      }
    }
  }

  const updateBenefitToggle = (benefit: TBenefitToggleType, isDetail: boolean) => ({
    ...benefit,
    isToggle: isDetail ? benefit.isToggle : !benefit.isToggle,
    isDetailToggle: isDetail ? !benefit.isDetailToggle : benefit.isDetailToggle,
  })

  const isToggleBenefit = (benefitId: number, isDetail: boolean) => {
    setBenefitToggles((prevState) => ({
      ...prevState,
      benefits: prevState.benefits.map((benefit) =>
        benefit.id === benefitId ? updateBenefitToggle(benefit, isDetail) : benefit,
      ),
    }))
  }

  return (
    <Card className="shadow-brand-primary h-full">
      <CardHeader>
        <CardTitle>{steps[currentStep - 1]}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-8">
        <Stepper steps={steps} currentStep={currentStep} />

        {/*Selection*/}
        <Card className="h-full">
          <CardContent className="px-0 lg:px-3">
            <div className="mx-2 flex flex-col text-sm lg:text-base gap-y-2">
              <div className="flex items-center font-semibold justify-between">
                <div
                  className="flex items-center cursor-pointer gap-x-1"
                  onClick={() => {
                    setIsOpenSelection(!isOpenSelection)
                  }}
                >
                  <span className="text-nowrap">Your selection</span>
                  <ChevronUp
                    className={cn(
                      isOpenSelection && "transform rotate-180",
                      "transition-transform duration-300 h-6 w-6 text-grey-500 shrink-0",
                    )}
                  />
                </div>
                <span className="text-right">Available: 5,000.00</span>
              </div>

              <Progress value={50} className="bg-gray-200 border border-gray-200" />

              <div>
                <span>used: </span>
                <span className="text-brand-secondary font-semibold">1,000.00</span>
              </div>

              <div
                className={cn(
                  isOpenSelection ? "max-h-screen" : "max-h-0",
                  "overflow-hidden transition-all duration-300",
                )}
              >
                <div className="flex flex-col gap-y-0.5">
                  <div className="grid grid-cols-2">
                    <div className="bg-gray-50 rounded-l-sm pl-2">Opening balance:</div>
                    <div className="font-semibold text-brand-secondary text-right">5,000.00</div>
                  </div>
                  <div className="grid grid-cols-2 items-center my-2">
                    <div className="bg-gray-50 rounded-l-sm pl-2">Utilization:</div>
                    <div className="font-semibold text-red-500 text-right">- 1,000.00</div>
                    <div className="bg-gray-50 rounded-l-sm pl-2 flex items-center gap-x-2">
                      <CircleCheck className="w-4 h-4 text-brand-secondary" />
                      <span>Group Term Life</span>
                    </div>
                    <div className="font-semibold text-right">- 1,000.00</div>
                    <div className="bg-gray-50 rounded-l-sm pl-8 flex items-center gap-x-2">
                      <span>Group Major Medical</span>
                    </div>
                    <div className="font-semibold text-right">0.00</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="bg-gray-50 rounded-l-sm pl-2">Remaining balance:</div>
                    <div className="font-semibold text-brand-secondary text-right">4,000.00</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/*Benefit list*/}
        {CBenefitSelections.map((benefit) => (
          <div key={benefit.id.toString()} className={currentStep === benefit.page ? "block" : "hidden"}>
            <Card className="h-full">
              <CardContent className="px-0 lg:px-3">
                <div className="mx-2 flex flex-col text-base gap-y-6">
                  <div className="flex flex-col md:flex-row lg:flex-row lg:items-center font-semibold justify-between">
                    <div
                      className="flex items-center cursor-pointer gap-x-1"
                      onClick={() => {
                        isToggleBenefit(benefit.id, false)
                      }}
                    >
                      <span className="font-bold text-base lg:text-lg">{benefit.name}</span>
                      <ChevronUp
                        className={cn(
                          getCurrentToggle(benefit.id)?.isToggle && "transform rotate-180",
                          "transition-transform duration-300 h-6 w-6 text-grey-500 shrink-0",
                        )}
                      />
                    </div>
                    <div
                      className={cn(
                        getCurrentToggle(benefit.id)?.isToggle ? "hidden md:flex lg:flex" : "hidden",
                        "items-center cursor-pointer gap-x-1",
                      )}
                      onClick={() => {
                        isToggleBenefit(benefit.id, true)
                      }}
                    >
                      <span>Learn more</span>
                      <ChevronUp
                        className={cn(
                          getCurrentToggle(benefit.id)?.isDetailToggle && "transform rotate-180",
                          "transition-transform duration-300 h-6 w-6 text-grey-500 shrink-0",
                        )}
                      />
                      <span>|</span>
                      <div className="cursor-pointer flex items-center gap-x-1">
                        <FileText className="w-5 h-5 text-brand-primary" />
                        <span>Plan details</span>
                      </div>
                    </div>
                  </div>

                  <div className="overflow-hidden transition-all duration-500 flex flex-col gap-y-4">
                    <div className="flex flex-col gap-y-1">
                      <span>{benefit.description}</span>
                      <span
                        className={cn(
                          getCurrentToggle(benefit.id)?.isDetailToggle ? "max-h-screen" : "max-h-0",
                          "overflow-hidden transition-all duration-300 mt-2",
                        )}
                      >
                        {benefit.additional}
                      </span>
                    </div>

                    {/*<input*/}
                    {/*  type="text"*/}
                    {/*  name="available"*/}
                    {/*  value={getCurrentPlan(benefit.id)?.planValue}*/}
                    {/*/>*/}
                    <div
                      className={cn(
                        getCurrentToggle(benefit.id)?.isToggle ? "flex lg:hidden md:hidden" : "hidden",
                        "font-semibold items-center cursor-pointer gap-x-1",
                      )}
                      onClick={() => {
                        isToggleBenefit(benefit.id, true)
                      }}
                    >
                      <span>Learn more</span>
                      <ChevronUp
                        className={cn(
                          getCurrentToggle(benefit.id)?.isDetailToggle && "transform rotate-180",
                          "transition-transform duration-300 h-6 w-6 text-grey-500 shrink-0",
                        )}
                      />
                      <span>|</span>
                      <div className="cursor-pointer flex items-center gap-x-1">
                        <FileText className="w-5 h-5 text-brand-primary" />
                        <span>Plan details</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <div>
                        All prices are quoted in <span className="font-semibold">SGD</span>
                      </div>
                      <span className="font-semibold">Select Plan</span>
                    </div>
                    <div className={getCurrentToggle(benefit.id)?.isToggle ? "inline-block" : "hidden"}>
                      <Badge variant="outline" className="text-brand-primary border-brand-primary">
                        Default
                      </Badge>
                    </div>
                    <div
                      className={cn(
                        "font-semibold grid gap-2 lg:gap-x-4 mb-2",
                        !getCurrentToggle(benefit.id)?.isToggle
                          ? "grid-cols-1 lg:grid-cols-2"
                          : "xs:gird-cols-1 sm:grid-cols-2 lg:grid-cols-4",
                      )}
                    >
                      {benefit.plans.map((plan) => (
                        <div
                          key={`plan_${plan.id.toString()}`}
                          onClick={() => handlePlanUpdate(benefit.id, plan.id, benefit.parentBenefitId)}
                          className={cn(
                            getCurrentPlan(benefit.id)?.planValue === plan.id
                              ? "text-white bg-brand-primary border-transparent"
                              : benefit.parentBenefitId !== null
                                ? "bg-gray-200 disabled cursor-not-allowed"
                                : "bg-white border",
                            benefit.parentBenefitId !== null ? "cursor-not-allowed" : "cursor-pointer",
                            getCurrentToggle(benefit.id)?.isToggle
                              ? "flex"
                              : getCurrentPlan(benefit.id)?.planValue === plan.id
                                ? "flex"
                                : "hidden",
                            "pt-2 px-4 pb-6 text-sm lg:text-base rounded-lg flex-col text-center items-center gap-y-0.5 lg:gap-y-1 shadow-md hover:drop-shadow-md",
                          )}
                        >
                          <div className="flex flex-col justify-between">
                            <div>
                              <p>{plan.name}</p>
                              <p className="text-xs lg:text-sm font-normal" hidden={!plan.assured}>
                                Sum Assured
                              </p>
                              <p hidden={!plan.assured}>{moneyDecimal(plan.assuredAmount)}</p>
                              <p>{plan.type}</p>
                            </div>
                            <p className="pt-6" hidden={plan.price === null}>
                              {benefit.unit} {moneyDecimal(plan.price)}
                            </p>
                          </div>
                          <div
                            className={cn(
                              !getCurrentToggle(benefit.id)?.isToggle && plan.options.length !== 0
                                ? "flex flex-col"
                                : "hidden",
                              "mt-3",
                            )}
                          >
                            <p>
                              {
                                plan.options.find((option) => option.id === getCurrentPlan(benefit.id)?.optionValue)
                                  ?.name
                              }
                            </p>
                            <p>
                              {benefit.unit}{" "}
                              {moneyDecimal(
                                plan.options.find((option) => option.id === getCurrentPlan(benefit.id)?.optionValue)
                                  ?.price,
                              )}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/*<input*/}
                    {/*  type="text"*/}
                    {/*  name="used"*/}
                    {/*  value={getCurrentPlan(benefit.id)?.optionValue}*/}
                    {/*/>*/}
                    <div
                      className={
                        getCurrentPlan(benefit.id)?.optionValue !== null && getCurrentToggle(benefit.id)?.isToggle
                          ? "flex flex-col gap-y-4"
                          : "hidden"
                      }
                    >
                      <span className="font-semibold">Select member(s) to be covered</span>
                      <div className={getCurrentToggle(benefit.id)?.isToggle ? "inline-block" : "hidden"}>
                        <Badge variant="outline" className="text-brand-primary border-brand-primary">
                          Default
                        </Badge>
                      </div>
                      <div
                        className={cn(
                          "font-semibold grid gap-2 lg:gap-x-4 mb-2",
                          !getCurrentToggle(benefit.id)?.isToggle
                            ? "grid-cols-1 lg:grid-cols-2"
                            : "xs:gird-cols-1 sm:grid-cols-2 lg:grid-cols-4",
                        )}
                      >
                        {benefit.plans
                          .find((plan) => getCurrentPlan(benefit.id)?.planValue === plan.id)
                          ?.options.map((option, key) => (
                            <div
                              key={`option_${option.id.toString()}`}
                              onClick={() =>
                                handleOptionUpdate(
                                  benefit.id,
                                  option.id,
                                  benefit.parentBenefitId,
                                  benefit.childBenefitId,
                                )
                              }
                              className={cn(
                                getCurrentPlan(benefit.id)?.optionValue === option.id
                                  ? "text-white bg-brand-primary border-transparent"
                                  : benefit.parentBenefitId !== null &&
                                      key !== 0 &&
                                      !getOption(
                                        benefit.parentBenefitId,
                                        getCurrentPlan(benefit.parentBenefitId)?.planValue ?? 0,
                                        getCurrentPlan(benefit.parentBenefitId)?.optionValue ?? 0,
                                      )?.isWholeFamily &&
                                      getPlan(
                                        benefit.parentBenefitId,
                                        getCurrentPlan(benefit.parentBenefitId)?.planValue ?? 0,
                                      )?.options.findIndex(
                                        (optionInit) =>
                                          optionInit.id === getCurrentPlan(benefit.parentBenefitId)?.optionValue,
                                      ) !== key
                                    ? "bg-gray-200 disabled cursor-not-allowed"
                                    : "bg-white border",
                                benefit.parentBenefitId !== null &&
                                  key !== 0 &&
                                  getCurrentPlan(benefit.id)?.optionValue !== option.id &&
                                  !getOption(
                                    benefit.parentBenefitId,
                                    getCurrentPlan(benefit.parentBenefitId)?.planValue ?? 0,
                                    getCurrentPlan(benefit.parentBenefitId)?.optionValue ?? 0,
                                  )?.isWholeFamily &&
                                  getPlan(
                                    benefit.parentBenefitId,
                                    getCurrentPlan(benefit.parentBenefitId)?.planValue ?? 0,
                                  )?.options.findIndex(
                                    (optionInit) =>
                                      optionInit.id === getCurrentPlan(benefit.parentBenefitId)?.optionValue,
                                  ) !== key
                                  ? "cursor-not-allowed"
                                  : "cursor-pointer",
                                getCurrentToggle(benefit.id)?.isToggle
                                  ? "flex"
                                  : getCurrentPlan(benefit.id)?.planValue === option.id
                                    ? "flex"
                                    : "hidden",
                                "pt-2 px-4 pb-6 text-sm lg:text-base rounded-lg flex-col text-center items-center gap-y-0.5 lg:gap-y-1 shadow-md hover:drop-shadow-md",
                              )}
                            >
                              <div className="h-full flex flex-col lg:gap-y-4 justify-between">
                                <p>{option.name}</p>
                                <p className="pt-6 lg:pt-2" hidden={option.price === null}>
                                  {benefit.unit} {moneyDecimal(option.price)}
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}

        <div className={currentStep === steps.length ? "flex flex-col gap-y-4 lg:gap-y-8" : "hidden"}>
          <Card className="h-full">
            <CardContent className="px-0 lg:px-3 mx-2 flex flex-col text-base gap-y-6">
              <span className="font-bold text-base lg:text-lg">Review your selection</span>
              <Table>
                <TableHeader>
                  <TableRow className="bg-brand-primary hover:bg-brand-primary text-white">
                    <TableHead className="text-nowrap lg:w-[30%]">Product</TableHead>
                    <TableHead className="text-nowrap lg:w-[50%]">Plan</TableHead>
                    <TableHead className="text-nowrap lg:w-[20%]">
                      <div className="flex gap-x-0.5 lg:gap-x-1 items-center justify-end">
                        <span>Price</span>
                        <TooltipProvider delayDuration={0}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <CircleHelp className="h-4 w-4" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>All prices are quoted in (SGD)</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {formData.plans.map((data, key) => (
                    <TableRow key={`form_data_table_${key.toString()}`}>
                      <TableCell className="text-nowrap md:text-wrap lg:text-wrap">
                        {getBenefit(data.benefitId)?.name}
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col text-nowrap md:text-wrap lg:text-wrap text-brand-primary">
                          <p className="font-semibold text-base">
                            {getPlan(data.benefitId, data.planValue ?? 0)?.name}
                          </p>
                          <div
                            className={
                              (getPlan(data.benefitId, data.planValue ?? 0)?.price ?? 0) === 0 &&
                              (getOption(data.benefitId, data.planValue ?? 0, data.optionValue ?? 0)?.price ?? 0) === 0
                                ? "hidden"
                                : "flex flex-col"
                            }
                          >
                            <p>Selected Members</p>
                            <p className="font-semibold text-xs">Rachel Svanhildr</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        {moneyDecimal(
                          getPlan(data.benefitId, data.planValue ?? 0)?.price ??
                            getOption(data.benefitId, data.planValue ?? 0, data.optionValue ?? 0)?.price ??
                            0,
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter className="font-bold">
                  <TableRow className="hover:bg-gray-50">
                    <TableCell colSpan={2} className="text-sm lg:text-base px-4 pb-2 pt-4">
                      Your selection:
                    </TableCell>
                    <TableCell className="text-sm lg:text-base text-right text-brand-secondary px-4 pb-2 pt-4">
                      {moneyDecimal(1000)}
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-gray-50">
                    <TableCell colSpan={2} className="text-sm lg:text-base px-4 py-2">
                      Opening balance:
                    </TableCell>
                    <TableCell className="text-sm lg:text-base text-right px-4 py-2">{moneyDecimal(5000)}</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-gray-50">
                    <TableCell colSpan={2} className="text-sm lg:text-base px-4 py-2">
                      Your Pay (Salary Deduction):
                    </TableCell>
                    <TableCell className="text-sm lg:text-base text-right text-red-500 px-4 py-2">
                      {moneyDecimal(0)}
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-gray-50">
                    <TableCell colSpan={2} className="text-sm lg:text-base px-4 pb-4 pt-2">
                      Remaining balance:
                    </TableCell>
                    <TableCell className="text-sm lg:text-base text-right text-brand-secondary px-4 pb-4 pt-2">
                      {moneyDecimal(4000)}
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardContent className="px-0 lg:px-3 mx-2 flex flex-col text-base gap-y-4">
              <p className="font-bold text-base lg:text-lg">Health Declaration is Required</p>
              <p className="text-sm lg:text-base">
                The insurer needs to know about your health, lifestyle, occupation and family history before approving
                your selected benefit upgrades. You can continue to checkout your selections. Any selection that
                requires Health declaration will be reset to last approved coverage, if Health declaration form is not
                submitted within the enrolment end date
              </p>
              <Button variant="primary" className="w-full lg:w-fit">
                Get Health Declaration Form
              </Button>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardContent className="px-0 lg:px-3 mx-2 flex flex-col text-base gap-y-4">
              <p>
                <span className="font-bold text-sm lg:text-base">Note:</span> You will not be allowed to make amendments
                to your selection/purchase after checking out.
              </p>
              <div className="flex items-start lg:items-center gap-x-2 lg:gap-x-4">
                <Checkbox id="terms" className="mt-1 lg:mt-0" />
                <Label htmlFor="terms" className="text-sm">
                  Please confirm that you have read the Product Summary and Your Guide to Health Insurance before
                  Submitting Benefits Selection. It can be found on the "
                  <span className="font-bold text-brand-secondary hover:underline cursor-pointer">
                    Benefits Information
                  </span>
                  " page.
                </Label>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col-reverse lg:flex-row gap-3 lg:justify-center">
        <Button
          variant="outline"
          className={cn(currentStep === 1 && "hidden", "w-full lg:w-fit border-brand-primary text-brand-primary")}
          onClick={() => {
            setStep(currentStep - 1)
          }}
        >
          Previous
        </Button>
        <Button
          variant="primary"
          className={currentStep === steps.length ? "hidden" : "w-full lg:w-fit block"}
          onClick={() => {
            setStep(currentStep + 1)
          }}
        >
          {currentStep === steps.length - 1 ? "Preview" : "Next"}
        </Button>
        <Button variant="success" className={currentStep === steps.length ? "block w-full lg:w-fit" : "hidden"}>
          Confirm
        </Button>
      </CardFooter>
    </Card>
  )
}

export default Create
