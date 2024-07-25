import type React from "react"
import type {FC} from "react"
import {Datepicker} from "flowbite-react"
import {cn} from "@/lib/utils"

interface DatePickerProps extends React.HTMLAttributes<HTMLButtonElement> {
  defaultDate?: Date
  minDate?: Date
  maxDate?: Date
  showTodayButton?: boolean
  showClearButton?: boolean
}

const theme = {
  root: {
    base: "relative",
    input: {
      base: "flex",
      addon: "",
      field: {
        base: "relative w-full",
        icon: {
          base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
        },
        input: {
          base: "block w-full border cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 border-gray-500 bg-white text-gray-950 focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary p-2.5 text-sm rounded-lg",
          sizes: {
            md: "text-sm font-normal",
          },
          colors: {
            gray: "border-gray-500",
          },
          withIcon: {
            off: "pl-2.5",
            on: "pl-2.5",
          },
        },
      },
    },
  },
  popup: {
    root: {
      base: "absolute top-10 z-50 block pt-2",
      inline: "relative top-0 z-auto",
      inner: "inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700",
    },
    header: {
      base: "",
      title: "px-2 py-3 text-center font-semibold text-gray-900 dark:text-white",
      selectors: {
        base: "mb-2 flex justify-between",
        button: {
          base: "rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
          prev: "",
          next: "",
          view: "",
        },
      },
    },
    view: {
      base: "p-1",
    },
    footer: {
      base: "mt-2 flex space-x-2",
      button: {
        base: "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-ring focus:ring-2 focus:ring-brand-primary",
        today:
          "bg-brand-primary text-white hover:bg-brand-secondary dark:bg-brand-secondary dark:hover:bg-brand-primary",
        clear:
          "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
      },
    },
  },
  views: {
    days: {
      header: {
        base: "mb-1 grid grid-cols-7",
        title: "h-6 text-center text-sm font-medium leading-6 text-gray-300 dark:text-gray-400",
      },
      items: {
        base: "grid w-64 grid-cols-7",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
          selected: "bg-brand-primary text-white hover:bg-brand-secondary",
          disabled: "text-gray-300",
        },
      },
    },
    months: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
          selected: "bg-brand-primary text-white hover:bg-brand-secondary",
          disabled: "text-gray-300",
        },
      },
    },
    years: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
          selected: "bg-brand-primary text-white hover:bg-brand-secondary",
          disabled: "text-gray-300",
        },
      },
    },
    decades: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
          selected: "bg-brand-primary text-white hover:bg-brand-secondary",
          disabled: "text-gray-300",
        },
      },
    },
  },
}

const CDatePicker: FC<DatePickerProps> = (props) => {
  return (
    <Datepicker
      theme={theme}
      autoHide={true}
      className={cn(props.className)}
      defaultDate={props.defaultDate}
      minDate={props.minDate ?? new Date(1990, 0, 1)}
      maxDate={props.maxDate ?? new Date()}
      showTodayButton={props.showTodayButton ?? true}
      showClearButton={props.showClearButton ?? false}
    />
  )
}

export default CDatePicker
