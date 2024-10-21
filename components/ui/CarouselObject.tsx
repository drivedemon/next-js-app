"use client"

import {Carousel} from "flowbite-react"
import type React from "react"
import type {FC} from "react"
import type {ReactNode} from "react"

interface carouselProp {
  children: ReactNode
  callbackApi: (index: number) => void
}

const theme = {
  root: {
    base: "relative max-h-screen w-full",
    leftControl: "absolute left-0 top-0 flex h-full items-center justify-center px-2 lg:px-4 focus:outline-none",
    rightControl: "absolute right-0 top-0 flex h-full items-center justify-center px-2 lg:px-4 focus:outline-none",
  },
  indicators: {
    active: {
      off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
      on: "bg-white dark:bg-gray-800",
    },
    base: "h-2 w-2 rounded-full",
    wrapper: "absolute bottom-2 left-1/2 flex -translate-x-1/2 space-x-3",
  },
  item: {
    base: "block w-full h-full text-white",
    wrapper: {
      off: "w-full flex-shrink-0 transform cursor-default snap-center",
      on: "w-full flex-shrink-0 transform cursor-grab snap-center",
    },
  },
  control: {
    base: "inline-flex h-5 w-5 lg:h-8 lg:w-8 items-center justify-center rounded-full opacity-50 bg-gray-400 group-hover:bg-gray-500 group-focus:outline-none group-focus:ring-2 group-focus:ring-gray-200 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
    snap: "snap-x",
  },
}

const CarouselObject: FC<carouselProp> = ({children, callbackApi}: carouselProp) => {
  return (
    <Carousel onSlideChange={(index: number) => callbackApi(index)} theme={theme} slide={false}>
      {children}
    </Carousel>
  )
}

export default CarouselObject
