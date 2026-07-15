export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  accent: string;
};

// Contentful-ready array structure for the team profiles
export const teamMembers: TeamMember[] = [
  {
    name: "Selina",
    role: "Chief Executive Officer",
    bio: "Somehow runs the whole charity and still remembers your birthday.",
    image: "/assets/team/Selina.webp",
    accent: "bg-weegee-teal text-weegee-white",
  },
  {
    name: "Hannah",
    role: "Chief Operations Officer",
    bio: "Keeps the whole operation running on spreadsheets, willpower and Tunnock's teacakes.",
    image: "/assets/team/Hannah.webp",
    accent: "bg-weegee-black text-weegee-white",
  },
  {
    name: "Clare",
    role: "Education Coordinator",
    bio: "Turns 'I don't speak English yet' into 'watch me pass this exam' in record time.",
    image: "/assets/team/Clare.webp",
    accent: "bg-weegee-yellow text-weegee-black",
  },
  {
    name: "Janette",
    role: "Cleaner",
    bio: "Runs a tighter ship than the Clyde-built ones — you could eat your dinner off any surface she's touched.",
    image: "/assets/team/Janette.webp",
    accent: "bg-weegee-teal text-weegee-white",
  },
  {
    name: "Nikki",
    role: "Operations Coordinator",
    bio: "Knows every family's name, kids' names, and preferred biscuit.",
    image: "/assets/team/Nikki.webp",
    accent: "bg-weegee-black text-weegee-white",
  },
  {
    name: "Lily",
    role: "Donations Coordinator",
    bio: "Can tell you the entire donation history of a jumper just by looking at it.",
    image: "/assets/team/Lily.webp",
    accent: "bg-weegee-yellow text-weegee-black",
  },
  {
    name: "Ross",
    role: "Logistics Coordinator",
    bio: "Can fit three sofas, a fridge and a strong sense of purpose into one transit van.",
    image: "/assets/team/placeholder.webp",
    accent: "bg-weegee-teal text-weegee-white",
  },
  {
    name: "Ruth",
    role: "Fundraising Manager",
    bio: "Could talk a stranger into sponsoring a bake sale from three streets away.",
    image: "/assets/team/Ruth.webp",
    accent: "bg-weegee-black text-weegee-white",
  },
  {
    name: "Brogan",
    role: "Corporate Volunteer Coordinator",
    bio: "Can wrangle forty corporate volunteers into a functioning production line before their coffee's even cold.",
    image: "/assets/team/Brogan.webp",
    accent: "bg-weegee-yellow text-weegee-black",
  },
  {
    name: "Sharon",
    role: "Volunteer/Office Coordinator",
    bio: "Balances the volunteer rota and the biscuit tin with equal precision.",
    image: "/assets/team/Sharon.webp",
    accent: "bg-weegee-teal text-weegee-white",
  },
  {
    name: "Farouq",
    role: "Project Coordinator",
    bio: "Fluent in five languages and one very persuasive kind of patience.",
    image: "/assets/team/Farouq.webp",
    accent: "bg-weegee-black text-weegee-white",
  },
  {
    name: "Paul",
    role: "Cleaner",
    bio: "Once mopped a floor so well the health inspector asked if he was hiring.",
    image: "/assets/team/placeholder.webp",
    accent: "bg-weegee-yellow text-weegee-black",
  },
  {
    name: "Frances",
    role: "Receptionist",
    bio: "Can locate any donated item in the stockroom by smell alone, and greet you warmly while doing it.",
    image: "/assets/team/Frances.webp",
    accent: "bg-weegee-teal text-weegee-white",
  },
  {
    name: "Christopher",
    role: "General Manager",
    bio: "Has reversed a van into tighter spots than most people have parallel parked, then gone straight into a budget meeting.",
    image: "/assets/team/Chris.webp",
    accent: "bg-weegee-black text-weegee-white",
  },
  {
    name: "Juanita",
    role: "Project Administrator",
    bio: "Wraps a welcome box like it's a gift for royalty, because it kind of is.",
    image: "/assets/team/Juanita.webp",
    accent: "bg-weegee-yellow text-weegee-black",
  },
  {
    name: "Imene",
    role: "Social Media & Content Creator",
    bio: "Turns a box of donated teacakes into a viral post before the kettle's even boiled.",
    image: "/assets/team/placeholder.webp",
    accent: "bg-weegee-teal text-weegee-white",
  },
];
