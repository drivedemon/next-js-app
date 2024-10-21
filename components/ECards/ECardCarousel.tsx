"use client"

import type {FC} from "react"
import type React from "react"
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/Card"
import Logo from "@/components/Icons/Logo"
import CarouselObject from "@/components/ui/CarouselObject"
import {useState} from "react"

export interface IECard {
  insurer_name: string
  dob: string
  policy_no: string
  holder_name: string
  expired_date: string
}

interface eCardProp {
  eCard: IECard[] | []
}

const ECardCarousel: FC<eCardProp> = (props: eCardProp) => {
  const [currentECard, setCurrentECard] = useState<number>(0)

  const getCurrentECard = (value: number) => setCurrentECard(value)

  return (
    <div className="flex flex-col gap-y-4 lg:gap-y-8">
      <CarouselObject callbackApi={getCurrentECard}>
        {props.eCard?.map((information: IECard, index: number) => (
          <div key={index.toString()} className="h-full text-white">
            <Card className="mx-auto h-full w-full md:w-3/6 lg:w-2/5 bg-gradient-to-tr from-brand-primary to-85% shadow-none">
              <CardContent className="flex gap-y-2 flex-col h-fit p-3 md:p-4 lg:p-6">
                <div className="flex justify-between pb-4 lg:pb-6">
                  <p className="text-2xl italic font-semibold">eCard</p>
                  <div className="w-24 lg:w-30">
                    <Logo />
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/2">
                    <p className="font-semibold">Insurer</p>
                    <p>{information.insurer_name}</p>
                  </div>
                  <div className="w-1/2">
                    <p className="font-semibold">Date of Birth</p>
                    <p>{information.dob}</p>
                  </div>
                </div>
                <p className="text-2xl font-semibold">{information.policy_no}</p>
                <div className="flex">
                  <div className="w-1/2">{information.holder_name}</div>
                  <div className="w-1/2 flex items-center gap-x-2">
                    <p className="text-xxs leading-3 font-semibold">
                      <span className="block">VALID</span>
                      <span className="block">THRU</span>
                    </p>
                    <p>{information.expired_date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </CarouselObject>
      <Card className="shadow-brand-primary">
        <CardHeader className="font-bold text-lg lg:text-xl">
          <CardTitle>eCard Information</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-12 gap-4">
          <div className="col-span-6 space-y-1">
            <p className="font-semibold text-base lg:text-lg">Insurer</p>
            <p>{props.eCard[currentECard].insurer_name}</p>
          </div>
          <div className="col-span-6 space-y-1">
            <p className="font-semibold text-base lg:text-lg">Date of Birth</p>
            <p>{props.eCard[currentECard].dob}</p>
          </div>
          <div className="col-span-6 space-y-1">
            <p className="font-semibold text-base lg:text-lg">Policy Number</p>
            <p>{props.eCard[currentECard].policy_no}</p>
          </div>
          <div className="col-span-6 space-y-1">
            <p className="font-semibold text-base lg:text-lg">Card Holder Name</p>
            <p>{props.eCard[currentECard].holder_name}</p>
          </div>
          <div className="col-span-6 space-y-1">
            <p className="font-semibold text-base lg:text-lg">Expired Date</p>
            <p>{props.eCard[currentECard].expired_date}</p>
          </div>
        </CardContent>
        <CardFooter className="flex gap-1 justify-between px-0" />
      </Card>
    </div>
  )
}

export default ECardCarousel
