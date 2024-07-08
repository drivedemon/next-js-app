import type React from "react"
import {cn} from "@/lib/utils"

interface StepperProps {
  steps: string[]
  currentStep: number
}

const Stepper: React.FC<StepperProps> = ({steps, currentStep}) => {
  return (
    <ol className="flex items-center justify-center w-full text-xs text-gray-900 font-semibold sm:text-base">
      {steps.map((step, index) => {
        const isCurrent = index + 1 === currentStep
        const isCompleted = index + 1 <= currentStep

        return (
          <li
            key={index.toString()}
            className={cn(
              'flex items-center justify-center flex-col w-full relative after:content-[""] after:w-full after:h-0.5 after:inline-block after:absolute lg:after:top-5 after:top-3',
              isCompleted && "text-brand-primary",
              index + 1 <= steps.length && (isCompleted ? "after:bg-brand-primary" : "after:bg-gray-200"),
              isCurrent ? "text-brand-primary after:bg-brand-primary" : "text-gray-900",
              index === 0 && "after:w-1/2 after:right-0",
              index + 1 === steps.length && "after:w-1/2 after:left-0",
            )}
          >
            <div className="block whitespace-nowrap z-10 text-center">
              <span
                className={cn(
                  "w-8 h-8 border-2 rounded-full flex justify-center items-center mx-auto mb-3 text-sm lg:w-12 lg:h-12",
                  isCurrent
                    ? "bg-indigo-50 border-brand-secondary text-brand-primary"
                    : isCompleted
                      ? "bg-brand-primary border-transparent text-white"
                      : "bg-gray-50 border-gray-200 text-gray-900",
                )}
              >
                {index + 1}
              </span>
              <span className="hidden lg:inline-block text-sm lg:text-base">{step}</span>
            </div>
          </li>
        )
      })}
    </ol>
  )
}

export default Stepper
