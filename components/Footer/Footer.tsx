import type {FC} from "react"
import {CFooterNavs} from "@/components/Footer/constants"
import Link from "next/link"

type FooterProps = {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="sticky z-1 bg-white w-full flex justify-center lg:justify-between border-t border-[#ECE4DE] py-3 px-4 lg:px-10">
      <div className="w-full flex-col lg:flex-row flex gap-2 lg:gap-10 justify-between">
        <div className="flex flex-col gap-9">
          <div className="sm:w-[327px] md:w-[505px] flex flex-col gap-1">
            <p className="text-gray-950 font-bold text-sm lg:text-base">Developed by</p>
            <Link
              href={"https://www.pacificprime.co.th/"}
              target="_blank"
              className="text-gray-950 font-bold text-sm lg:text-lg"
            >
              Pacific Prime Thailand
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between md:gap-12">
          {CFooterNavs.map((value) => (
            <div key={value.id.toString()} className="flex flex-col gap-5">
              <h4 className="text-gray-950 text-sm lg:text-base font-semibold">{value.category}</h4>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
