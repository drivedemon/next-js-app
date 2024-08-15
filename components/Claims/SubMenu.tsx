"use client"

import type {FC} from "react"
import type React from "react"
import {useEffect, useReducer} from "react"
import {cn} from "@/lib/utils"

export interface SubMenuClaimType {
  key: string
  value: string
}

interface SubMenuTabProps {
  claimTypeState: ({key, value}: SubMenuClaimType) => void
}

export const claimTypePage = ["track", "completed"]
export const claimTypeDisplay = ["Track Claims", "Completed Claims"]

const ClaimSubMenu: FC<SubMenuTabProps> = ({claimTypeState}: SubMenuTabProps) => {
  const initState: SubMenuClaimType = {key: claimTypePage[0], value: claimTypeDisplay[0]}
  const claimTypeReducer = (state: SubMenuClaimType, action: {type: string}) => {
    switch (action.type) {
      case claimTypePage[0]:
        return {key: claimTypePage[0], value: claimTypeDisplay[0]}
      case claimTypePage[1]:
        return {key: claimTypePage[1], value: claimTypeDisplay[1]}
      default:
        return state
    }
  }
  const setClaimType = (newClaimType: string) => {
    dispatch({type: newClaimType})
  }
  const [claimType, dispatch] = useReducer(claimTypeReducer, initState)

  useEffect(() => {
    claimTypeState(claimType)
  }, [claimType, claimTypeState])

  return (
    <div className="lg:px-3 flex gap-x-0.5">
      {claimTypePage.map((type, index) => (
        <div
          key={type}
          onClick={() => {
            setClaimType(type)
          }}
          className={cn(
            claimType.key === type && "shadow-brand-primary text-brand-primary",
            "border border-t-0 cursor-pointer shadow-md hover:shadow-brand-primary py-3 px-4 rounded-b-lg font-semibold",
          )}
        >
          {claimTypeDisplay[index]}
        </div>
      ))}
    </div>
  )
}

export default ClaimSubMenu
