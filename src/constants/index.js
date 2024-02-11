import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  python,
  dart,
  django,
  flutter,
  blender,
  vue,
  illustrator,
  postgres,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  geonfinity,
  globiz,
  bnks,
  acem,
  threejs,
  melowave,
  xpnstrkr,
  oilcredit,
  farmerz,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphics Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Vue",
    icon: vue,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Illustrator",
    icon: illustrator,
  },
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  }
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Globiz Engineering Solutions",
    icon: globiz,
    iconBg: "#383E56",
    date: "October 2022 - January 2023",
    points: [
      "Developing and maintaining web applications using Vue.js, Quasar and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "GeonFinity",
    icon: geonfinity,
    iconBg: "#E6DEDD",
    date: "November 2023 - Present",
    points: [
      "Developing and maintaining web applications using Django, React.js and other related technologies.",
      "Integrating Third Party APIs.",
      "Working on data analysis and visualization projects on GeoSpatial Database.",
      "Collaborating with cross-functional teams to create high-quality products.",
    ],
  },
];

const educations = [
  {
    title: "CIE A-Levels",
    company_name: "Budhanilkantha School",
    icon: bnks,
    iconBg: "#383E56",
    date: "2017 - 2019",
    points: [],
  },
  {
    title: "Bachelors in Computer Engineering",
    company_name: "Advanced College of Engineering and Management",
    icon: acem,
    iconBg: "#E6DEDD",
    date: "2019 - 2024",
    points: [],
  },
];
// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "MeloWave.ai",
    description:
      "Melowave AI is a groundbreaking music generation app that harnesses the power of deep learning to unlock the limitless potential of your musical imagination. Whether you're a seasoned musician or someone with a passion for creating unique melodies, Melowave AI is designed to inspire and empower you in crafting original and captivating compositions effortlessly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: melowave,
    source_code_link: "https://github.com/nitefury7/MeloWave",
  },
  {
    name: "Expense-Tracker",
    description:
      "The Expense Tracker app is a user-friendly and powerful tool designed to simplify and optimize personal and business financial management. This application is equipped with features that allow users to effortlessly track and categorize expenses, set budget goals, and gain valuable insights into spending patterns. With a clean interface, the Expense Tracker app provides organized approach to managing expenses.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: xpnstrkr,
    source_code_link: "https://github.com/nitefury7/Expense-Tracker",
  },
  {
    name: "OilCredit",
    description:
      "A Web based system designed exclusively for gas stations, offering an efficient solution for managing credits, storage inventory, and dynamic oil prices. This innovative application empowers gas station owners and operators to streamline their operations, enhance financial control, and optimize pricing strategies. ",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: oilcredit,
    source_code_link: "https://github.com/nitefury7/OilCredit",
  },
  {
    name: "Farmerz",
    description:
      "The Farmerz is a system designed exclusively for farmers and thier customers, offering an efficient solution for shopping groceries to promote local products. This application empowers farmers to place their local products and customers to buy them from their personalized recommendation according to their past rating for the products.",
    tags: [
      {
        name: "django-rest",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
    ],
    image: farmerz,
    source_code_link: "https://github.com/nitefury7/farmerz_api",
  },
];

export { services, technologies, experiences, projects, educations };
