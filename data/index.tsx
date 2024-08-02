import { FaJava } from "react-icons/fa6";
import {
  SiAndroid,
  SiC,
  SiChakraui,
  SiCplusplus,
  SiDart,
  SiExpress,
  SiFlutter,
  SiGithub,
  SiGoogle,
  SiJavascript,
  SiLinkedin,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

export const navItems = [
  { name: "Home", link: "#" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const aboutMe = [
  {
    id: 1,
    content:
      "hello! my name is jim and i’ve come a long way from where i’ve began.",
  },
  {
    id: 2,
    content:
      "Growing up in Guam, I had a knack for tinkering with technology, often experimenting with old laptops and second-hand phones. rightly so, my mom would  call me a “sira-niko,” a playful combination of the Tagalog words for broken and mechanic, because I enjoyed fixing things, even if I sometimes made them worse before improving them. With a background that lacked college education and limited financial means, I took it upon myself to pursue higher education. Now, I’m pursuing an accelerated Master’s in Software Engineering at Embry-Riddle Aeronautical University.",
  },
  {
    id: 3,
    content:
      "in recent years, full-stack and app development have caught my eye. it was inspired by my fascination of how software could simplify life.  here i am now in 2024, building a website that makes it easier for other people to get to know who i am :)",
  },
];

export const quote = [
  "Software Engineering is not just about creating code; it's about crafting solutions that improve lives, foster innovation, and drive progress.",
];

export const gridItems = [
  {
    id: 1,
    title: "Languages & Frameworks",
    description: "Learning to master diverse",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[40vh]",
    imgClassName: "w-full h-full right-0 opacity-20",
    titleClassName: "text-center lg:pt-3 md:pt-6 pt-6",
    img: "/b5.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Enriches lives & Impacts communities.",
    description: "I develop software that",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "/grid.svg",
  },
  {
    id: 3,
    title: "BS/MS in Software Engineering",
    subtitle: "Minor in Psychology",
    subheading: "Accelerated Master's",
    description: "Soaring through with 5 years of higher-level education.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName:
      "opacity-5 -translate-x-10 -translate-y-10 flex items-center justify-center h-[110%]",
    titleClassName: "justify-center text-right",
    img: "/erau-logo.png",
    spareImg: "",
  },
];

export const projectList = [
  {
    id: 1,
    title: "ERAU SASE Website",
    des: "An engaging and interactive website for a growing school organization (SASE) significantly enhanced the online presence and member engagement, allowing members to easily access resources and stay updated on events.",
    img: "/sasewebsite.png",
    iconLists: [
      <SiReact />,
      <SiVite />,
      <SiTailwindcss />,
      <SiNodedotjs />,
      <SiExpress />,
    ],
    figma:
      "https://www.figma.com/design/asLSI4MLL23B2DAWEvW7XJ/SASE-Website?node-id=0-1&t=k5Sa2PpU2Liv9HSW-1",
    link: "https://sase-website.pages.dev",
    linktype: "Website",
  },
  {
    id: 2,
    title: "FitSage",
    des: "An at-home fitness and nutrition app was designed to combat health challenges for students, featuring a workout planner and tracking nutrient intake and body metrics. This was created to provide a comprehensive tool for maintaining a healthy lifestyle during the COVID-19 pandemic.",
    img: "/fitsage.png",
    iconLists: [
      <SiFlutter />,
      <SiDart />,
      <FaJava />,
      <SiSqlite />,
      <SiAndroid />,
      
    ],
    figma: "",
    link: "https://github.com/ERAUFitnessTracker/FitSage",
    linktype: "GitHub",
  },
  {
    id: 3,
    title: "Visionary",
    des: "A lightweight and easy-to-use photography website functions as a photo database and a dynamic portfolio, showcasing work with a sleek, responsive design. It's particularly useful for photographers looking to present their work professionally and accessibly, making it easy for clients and viewers to explore their portfolio on any device.",
    img: "/visionary.png",
    iconLists: [
      <SiReact />,
      <SiNodedotjs />,
      <SiExpress />,
      <SiMysql />,
      <SiChakraui />,
    ],
    figma:
      "https://www.figma.com/design/7zc5jB6tZND5YSb4nNW2gH/Visionary?node-id=0-1&t=q3KLwCAOE9VUwNAO-1",
    link: "https://github.com/j1r0/visionary",
    linktype: "GitHub",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    icon: <SiLinkedin />,
    link: "https://www.linkedin.com/in/jpamplona28/",
  },
  {
    id: 2,
    icon: <SiGoogle />,
    link: "mailto:pamplonajimp@gmail.com",
  },
  {
    id: 3,
    icon: <SiGithub />,
    link: "https://github.com/j1r0",
  },
];
export const technologies = [
  {
    title: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    title: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    title: "Java",
    icon: <FaJava />,
  },
  {
    title: "Python",
    icon: <SiPython />,
  },
  {
    title: "C",
    icon: <SiC />,
  },
  {
    title: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    title: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    title: "MySQL",
    icon: <SiMysql />,
  },
  {
    title: "Node.js",
    icon: <SiNodedotjs />,
  },
  {
    title: "C++",
    icon: <SiCplusplus />,
  },
  {
    title: "Express.js",
    icon: <SiExpress />,
  },
  {
    title: "Dart",
    icon: <SiDart />,
  },
  {
    title: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    title: "React",
    icon: <SiReact />,
  },
  {
    title: "Chakra UI",
    icon: <SiChakraui />,
  },
  {
    title: "SQLite",
    icon: <SiSqlite />,
  },
  {
    title: "Flutter",
    icon: <SiFlutter />,
  },
  {
    title: "GitHub",
    icon: <SiGithub />,
  },
];
