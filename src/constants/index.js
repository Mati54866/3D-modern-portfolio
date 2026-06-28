import {
  mobile,
  backend,
  creator,
  web,
  javascript,
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
  travelmate,
  cryptoverse,
  gpt5,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React Developer",
    company_name: "Tech Innovators Inc",
    icon: web,
    iconBg: "#383E56",
    date: "Sep 20, 2024 - Jan 10, 2025",
    points: [
      "Developed reusable React components and optimized application performance.",
      "Implemented state management using Redux Toolkit for complex applications.",
      "Collaborated with designers to create responsive and intuitive user interfaces.",
      "Participated in code reviews and maintained code quality standards.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Digital Solutions Ltd",
    icon: backend,
    iconBg: "#383E56",
    date: "Jun 2025 - Oct 2025",
    points: [
      "Developed full-stack applications using MERN stack.",
      "Designed and implemented RESTful APIs with Node.js and Express.",
      "Managed databases and optimized database queries for better performance.",
      "Deployed applications on cloud platforms and maintained production systems.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "iCreativez Technologies",
    icon: web,
    iconBg: "#383E56",
    date: "Nov 2024 - Dec 2024",
    points: [
      "Collaborated with the development team to fix bugs and improve existing features.",
      "Assisted in developing and maintaining web applications using the MERN stack.",
      "Gained practical experience in full-stack web development.",
      "Worked on responsive UI design and backend API integration.",
    ],
  },
  {
    title: "Student / Diploma Pursuit",
    company_name: "Aptech Learning",
    icon: creator,
    iconBg: "#383E56",
    date: "Present",
    points: [
      "Pursuing Advanced Diploma in Software Engineering.",
      "Gaining comprehensive knowledge in full-stack development and emerging technologies.",
      "Developing problem-solving skills through hands-on projects and assignments.",
      "Building foundation for professional career in software development.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Matiullah proved me wrong.",
    name: "Fatima Khan",
    designation: "CEO",
    company: "TechStart Pakistan",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Matiullah does.",
    name: "Ahmed Hassan",
    designation: "Product Manager",
    company: "StartupHub",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Matiullah optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Zainab Ahmed",
    designation: "Project Lead",
    company: "Digital Ventures",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "TravelMate",
    description:
      "A full-featured travel guide platform where users can explore curated journeys, browse travel guides, and book trips. Built with a modern dark UI, user authentication, and responsive design for all devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: travelmate,
    live_link: "https://travelmate-guide.vercel.app/",
    source_code_link: "https://github.com/Mati54866/travelmate",
  },
  {
    name: "Cryptoverse",
    description:
      "A comprehensive cryptocurrency dashboard that displays real-time global crypto stats, top coins by market cap, exchange data, and the latest crypto news — all powered by live APIs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: cryptoverse,
    live_link: "https://cryptoverse-by-mati.netlify.app/",
    source_code_link: "https://github.com/Mati54866/cryptoverse",
  },
  {
    name: "GPT-5 UI",
    description:
      "A sleek, modern UI/UX design for a GPT-5 AI platform. Features a stunning dark-themed hero with gradient typography, email signup CTA, social proof indicators, and a fully responsive layout built for SaaS products.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
      {
        name: "modern-ui/ux",
        color: "pink-text-gradient",
      },
    ],
    image: gpt5,
    live_link: "https://mati-gpt-5-ui.netlify.app/",
    source_code_link: "https://github.com/Mati54866/project_modern_ui_ux_gpt5-main",
  },
];

export { services, technologies, experiences, testimonials, projects };
