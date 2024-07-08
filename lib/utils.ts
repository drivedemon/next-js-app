import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const displayCommaFloat = (number?: string | number) => {
  let value = number
  if (value !== null && value !== undefined) {
    if (typeof value === "number") {
      value = value.toString()
    }
    const valueArray = value.split(".")
    const integer = valueArray[0]
    const decimal = valueArray[1]
    let result = null
    if (Number.parseInt(integer.replaceAll(/\D/g, "")) >= 0) {
      if (Number.parseInt(integer.replaceAll(/\D/g, "")) === 0) {
        result = "0"
      } else {
        result = integer
          .replaceAll(/\D/g, "")
          .replace(/^0+/, "")
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      }
    } else {
      result = ""
    }
    if (decimal !== undefined) {
      result += `.${decimal.replaceAll(/\D/g, "")}`
    }
    return result
  }
  return ""
}

export const displayCommaInt = (number?: string | number) => {
  let value = number
  if (value !== null && value !== undefined) {
    if (typeof value === "number") {
      value = value.toString()
    }
    const valueArray = value.split(".")
    const integer = valueArray[0]
    let result = null
    if (Number.parseInt(integer.replaceAll(/\D/g, "")) >= 0) {
      if (Number.parseInt(integer.replaceAll(/\D/g, "")) === 0) {
        result = "0"
      } else {
        result = integer
          .replaceAll(/\D/g, "")
          .replace(/^0+/, "")
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      }
    } else {
      result = ""
    }
    return result
  }
  return ""
}

export const money = (number: number | null | undefined) => {
  const value = number ?? 0
  return new Intl.NumberFormat("en-US").format(value)
}

export const moneyDecimal = (number: number | null | undefined) => {
  const value = number ?? 0
  return new Intl.NumberFormat("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2}).format(value)
}
