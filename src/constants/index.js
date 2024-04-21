import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  aws,
  docker,
  kubernetes,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  oasis,
  sheffield,
  ajou,
  myfair,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: aws,
    name: "AWS",
    type: "Cloud",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "DevOps",
  },
  {
    imageUrl: kubernetes,
    name: "Kubernetes",
    type: "DevOps",
  }
];

export const experiences = [
  {
    title: "Software Developer",
    company_name: "Oasis Studio",
    icon: oasis,
    iconBg: "#accbe1",
    date: " 2022 October - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Msc Student in Advanced Computer Science",
    company_name: "The University of Sheffield",
    icon: sheffield,
    date: " September 2021 - October 2022",
    points: [
      "Learned about advanced computer science topics including machine learning, computer vision, and natural language processing.",
      "Developed and implemented algorithms for solving complex problems in computer science.",
      "Participated in group projects and collaborated with other students to develop software applications.",
      "Completed a dissertation on a topic related to computer science.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "MyFair.co",
    icon: myfair,
    iconBg: "#b7e4c7",
    date: "Jun 2019 - Nov 2019",
    points: [
      "Developped the Business Match System for MyFair, a key graduation project at Ajou University, using Spring Boot, Vue.js, MySQL, Socket.io, and GraphQL.",
      "Enabled Korean enterprises to identify overseas opportunities, leveraging technology for international business outreach.",
      "Utilized data from an online expo booking platform to facilitate smart business matchmaking, fostering global connections.",
      "Contributed significantly to international business engagement, showcasing the impact of technology in global market expansion."
    ]

  },
  {
    title: "Bsc Student in Software Engineering",
    company_name: "Ajou University",
    icon: ajou,
    iconBg: "#a2d2ff",
    date: "Mar 2015 - Feb 2020",
    points: [
      "Learned about software engineering principles and practices including software design, development, and testing.",
      "Developed software applications using various programming languages and technologies.",
      "Participated in group projects and collaborated with other students to develop software applications.",
      "Completed a graduation project on a topic related to software engineering.",
    ],
  },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/jishen027',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/jeblee',
  }
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: 'btn-back-red',
    name: 'Prompt Not Found',
    description: 'Developed a web application to Share and Discover ChatGPT Prompts for Writing, Drawing, and other Creative Activities.',
    link: 'https://www.promptnotfound.com/',
  },
  {
    iconUrl: threads,
    theme: 'btn-back-green',
    name: 'Evently',
    description: 'Online event booking platform for virtual and in-person events, enabling users to discover and book events in their area.',
    link: 'https://evently-gold-tau.vercel.app/',
  },
  {
    iconUrl: car,
    theme: 'btn-back-blue',
    name: 'My Notes',
    description: 'Note-taking app that allows users to create, edit, and delete notes, and organize them into categories.',
    link: 'https://jishen027.github.io/my-notes/',
  },
];