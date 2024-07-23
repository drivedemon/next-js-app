"use client"

import dynamic from "next/dynamic"

const ApexChart = dynamic(() => import("react-apexcharts"), {ssr: false})

export function Donut() {
  const option = {
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "75%",
          background: "black",
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: -22,
              formatter: (): any => ["Total Rewards", "SGD 233,828.00", "131.1%", "of my base Salary"],
            },
            value: {
              show: false,
            },
            total: {
              showAlways: true,
              show: true,
              fontSize: "12px",
              fontWeight: "bold",
              color: "white",
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    series: [193000, 19000, 11828, 10000.0],
    labels: ["Total Cash", "Retirement Benefits", "Group Insurance Benefits", "Flexible Spending Account"],
    colors: ["#0E6DBE", "#FF6F21", "#16A34A", "#A855F7"],
    tooltip: {
      y: {
        formatter: (value: number) => `HKD ${value.toLocaleString()}`,
      },
    },
    responsive: [
      {
        breakpoint: 1300,
        options: {
          plotOptions: {
            pie: {
              donut: {
                size: "77%",
                labels: {
                  name: {
                    offsetY: -17,
                  },
                  total: {
                    fontSize: "8px",
                  },
                },
              },
            },
          },
        },
      },
      {
        breakpoint: 1023,
        options: {
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  name: {
                    offsetY: -17,
                  },
                  total: {
                    fontSize: "9px",
                  },
                },
              },
            },
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  name: {
                    offsetY: -22,
                  },
                  total: {
                    fontSize: "12px",
                  },
                },
              },
            },
          },
        },
      },
      {
        breakpoint: 321,
        options: {
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  name: {
                    offsetY: -17,
                  },
                  total: {
                    fontSize: "9px",
                  },
                },
              },
            },
          },
        },
      },
    ],
  }

  return (
    <>
      <ApexChart type="donut" options={option} series={option.series} height="auto" width="100%" />
    </>
  )
}
