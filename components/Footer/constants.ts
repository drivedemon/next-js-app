import type {TFooterNav} from "@/types/FooterNav"

export const CFooterNavs: TFooterNav[] = [
  {
    id: 1,
    category: "Contact Us",
    navs: [
      {
        id: 1,
        value: "Help Center",
        href: "/",
      },
      {
        id: 2,
        value: "About Us",
        href: "/",
      },
      {
        id: 3,
        value: "Blog",
        href: "/",
      },
    ],
  },
  {
    id: 2,
    category: "Our Policies",
    navs: [
      {
        id: 1,
        value: "Terms and Con",
        href: "/",
      },
      {
        id: 2,
        value: "Term to Use",
        href: "/",
      },
      {
        id: 3,
        value: "Privacy Policy",
        href: "/",
      },
    ],
  },
  {
    id: 3,
    category: "Follow Us",
    navs: [
      {
        id: 1,
        value: "Facebook",
        href: "/",
      },
      {
        id: 2,
        value: "Instagram",
        href: "/",
      },
      {
        id: 3,
        value: "Twitter",
        href: "/",
      },
    ],
  },
]
