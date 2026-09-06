export interface NavLink {
  label: string;
  href: string;
}

export interface NavDropdown {
  label: string;
  items: NavLink[];
}

export const navDropdowns: NavDropdown[] = [
  {
    label: "Who we are",
    items: [
      { label: "Meet the team", href: "/meet-the-team" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  {
    label: "What we do",
    items: [
      { label: "Merch", href: "/merch" },
      { label: "The shop (referral only)", href: "/shop" },
    ],
  },
  {
    label: "Get involved",
    items: [
      { label: "Volunteering", href: "/volunteering" },
      { label: "Fundraise for us", href: "/fundraise" },
      { label: "Make a referral", href: "/referrals" },
      { label: "Your donations", href: "/your-donations" },
    ],
  },
];

export const navLinks: NavLink[] = [
  { label: "Safe With Me", href: "/safe-with-me" },
  { label: "Events", href: "/events" },
];
