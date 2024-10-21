export type Option = {
  id: number
  name: string
  isWholeFamily: boolean
  price: number
}

export type Plan = {
  id: number
  name: string
  price: number | null
  type: string | null
  assured: boolean
  assuredAmount: number | null
  default: boolean
  healthDeclaration: boolean
  options: Option[] | []
}

export type BenefitSelection = {
  id: number
  page: number
  name: string
  description: string
  additional: string
  unit: string
  path: string
  plans: Plan[] | []
  parentBenefitId: number | null
  childBenefitId: number | null
}

export const CBenefitSelections: BenefitSelection[] = [
  {
    id: 1,
    page: 1,
    name: "Sell Leave",
    description: "Leave sell down price tag will be converted to Flexible Spending Account (FSA) credits.",
    additional: "Instead of having your hard earned leave go to waste, trade your leave for more Flex.",
    unit: "Credit",
    path: "url",
    plans: [
      {
        id: 1,
        name: "Not Sell",
        price: 0,
        type: null,
        default: false,
        assured: false,
        assuredAmount: null,
        healthDeclaration: false,
        options: [],
      },
      {
        id: 2,
        name: "Sell 1 Day",
        price: 250,
        type: null,
        default: true,
        assured: false,
        assuredAmount: null,
        healthDeclaration: false,
        options: [],
      },
      {
        id: 3,
        name: "Sell 2 Days",
        price: 500,
        type: null,
        default: false,
        assured: false,
        assuredAmount: null,
        healthDeclaration: false,
        options: [],
      },
      {
        id: 4,
        name: "Sell 3 Days",
        price: 750,
        type: null,
        default: false,
        assured: false,
        assuredAmount: null,
        healthDeclaration: false,
        options: [],
      },
    ],
    parentBenefitId: null,
    childBenefitId: null,
  },
  {
    id: 2,
    page: 2,
    name: "Group Term Life",
    description: "Covers you for death and total permanent disability. Choose your coverage.",
    additional:
      "Your coverage amount or sum assured up to a maximum of $2,000,000 is paid out in one lump sum, should you die due to any cause. If you are permanently disabled before the age of 65 or contract a terminal illness, lump sum payment of $200,000 or the Sum Assured whichever is lower will be payable and the balance paid 12 months later. You may need to be underwritten if you opt for higher coverage.",
    unit: "Spend",
    path: "url",
    plans: [
      {
        id: 5,
        name: "12x Basic Monthly Salary",
        price: 100,
        type: null,
        default: false,
        assured: true,
        assuredAmount: 100000,
        healthDeclaration: false,
        options: [],
      },
      {
        id: 6,
        name: "24x Basic Monthly Salary",
        price: 200,
        type: null,
        default: false,
        assured: true,
        assuredAmount: 200000,
        healthDeclaration: false,
        options: [],
      },
      {
        id: 7,
        name: "36x Basic Monthly Salary",
        price: 300,
        type: null,
        default: true,
        assured: true,
        assuredAmount: 300000,
        healthDeclaration: true,
        options: [],
      },
    ],
    parentBenefitId: null,
    childBenefitId: null,
  },
  {
    id: 3,
    page: 3,
    name: "Group Hospital & Surgical",
    description: "Covers medical expenses you incur as a result of hospitalisation or surgery. Choose your coverage.",
    additional:
      "The benefits within a hospital and surgical plan are typically in line with the daily rate for room and board. Hence your primary decision is the hospital ward type you prefer. Selecting a private hospital plan gives you the option of both private and restructured (government) hospital admission, and higher surgical limits.",
    unit: "Spend",
    path: "url",
    plans: [
      {
        id: 8,
        name: "4 Bed",
        price: null,
        type: "Private",
        default: true,
        assured: false,
        assuredAmount: null,
        healthDeclaration: false,
        options: [
          {
            id: 1,
            name: "Employee Only",
            isWholeFamily: false,
            price: 100,
          },
          {
            id: 2,
            name: "Employee & Spouse Only",
            isWholeFamily: false,
            price: 200,
          },
          {
            id: 3,
            name: "Employee & Family Only",
            isWholeFamily: true,
            price: 300,
          },
        ],
      },
      {
        id: 9,
        name: "2 Bed",
        price: null,
        type: "Private",
        default: false,
        assured: false,
        assuredAmount: null,
        healthDeclaration: false,
        options: [
          {
            id: 4,
            name: "Employee Only",
            isWholeFamily: false,
            price: 400,
          },
          {
            id: 5,
            name: "Employee & Spouse Only",
            isWholeFamily: false,
            price: 500,
          },
          {
            id: 6,
            name: "Employee & Family Only",
            isWholeFamily: true,
            price: 600,
          },
        ],
      },
      {
        id: 10,
        name: "1 Bed",
        price: null,
        type: "Private",
        default: false,
        assured: false,
        assuredAmount: null,
        healthDeclaration: false,
        options: [
          {
            id: 7,
            name: "Employee Only",
            isWholeFamily: false,
            price: 700,
          },
          {
            id: 8,
            name: "Employee & Spouse Only",
            isWholeFamily: false,
            price: 800,
          },
          {
            id: 9,
            name: "Employee & Family Only",
            isWholeFamily: true,
            price: 900,
          },
        ],
      },
    ],
    parentBenefitId: null,
    childBenefitId: 4,
  },
  {
    id: 4,
    page: 3,
    name: "Group Major Medical",
    description:
      "Covers medical expenses you incur as a result of hospitalisation or surgery,\n" +
      "that exceed limits payable under your Hospital & Surgical plan. Choose your coverage.",
    additional:
      "Major Medical coverage protects you from large hospital bills that can arise when a serious or unexpected ailment happens. It works in tandem with your Hospital & Surgical plan so the same hospital ward type is pre-selected for you. There is a co-insurance of 20% for restructured (government) and private hospital that you will have to bear.",
    unit: "Spend",
    path: "url",
    plans: [
      {
        id: 11,
        name: "4 Bed - Annual Limit $40,000",
        price: null,
        type: "Private",
        default: true,
        assured: false,
        assuredAmount: null,
        healthDeclaration: false,
        options: [
          {
            id: 10,
            name: "Employee Only",
            isWholeFamily: false,
            price: 1000,
          },
          {
            id: 11,
            name: "Employee & Spouse Only",
            isWholeFamily: false,
            price: 1100,
          },
          {
            id: 12,
            name: "Employee & Family Only",
            isWholeFamily: true,
            price: 1200,
          },
        ],
      },
      {
        id: 12,
        name: "2 Bed - Annual Limit $60,000",
        price: null,
        type: "Private",
        default: false,
        assured: false,
        assuredAmount: null,
        healthDeclaration: false,
        options: [
          {
            id: 13,
            name: "Employee Only",
            isWholeFamily: false,
            price: 1300,
          },
          {
            id: 14,
            name: "Employee & Spouse Only",
            isWholeFamily: false,
            price: 1400,
          },
          {
            id: 15,
            name: "Employee & Family Only",
            isWholeFamily: true,
            price: 1500,
          },
        ],
      },
      {
        id: 13,
        name: "1 Bed - Annual Limit $80,000",
        price: null,
        type: "Private",
        default: false,
        assured: false,
        assuredAmount: null,
        healthDeclaration: false,
        options: [
          {
            id: 16,
            name: "Employee Only",
            isWholeFamily: false,
            price: 1600,
          },
          {
            id: 17,
            name: "Employee & Spouse Only",
            isWholeFamily: false,
            price: 1700,
          },
          {
            id: 18,
            name: "Employee & Family Only",
            isWholeFamily: true,
            price: 1800,
          },
        ],
      },
    ],
    parentBenefitId: 3,
    childBenefitId: null,
  },
]
