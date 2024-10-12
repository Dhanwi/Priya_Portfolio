import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
 
  TProjectwork,
  TWork,
} from "../types";

import {
  mobile,
  backend,
 
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  
  gsap,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  
  meta,
  
  starbucks,
  tesla,
  shopify,
  Templeverse,
  shirt,
  Metaverse,
  tribe,
  apple,
  Drone,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "3D Web Developer",
    icon: web,
  },
  {
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Shopify Developer",
    icon: shopify,
  },
];

const technologies: TTechnology[] = [
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
    name: "Gsap",
    icon: gsap,
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
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences: TExperience[] = [
  {
    title: "React.js Developer",
    companyName: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    companyName: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    companyName: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];
const projectswork: TProjectwork[] = [
  {
    title: "Ongoing Project . . .",
    companyName: "Templeverse",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2024 - Present",
    points: [
      "Integrated a highly detailed 3D model of a temple, offering an immersive visual experience.",
      "Leveraged GSAP animations to create fluid transitions and interactive elements across the interface.",
      "Developed an eye-catching hero section to engage users, showcasing modern web design principles.",
      "Built using React Vite and Tailwind CSS, focusing on a sleek, responsive, and user-friendly interface without content.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Blender",
        color: "orange-text-gradient",
      },
    ],
    image: Templeverse,
    sourceCodeLink: "https://github.com/Dhanwi/modelTemple",
  },
  {
    title: "Tribal Community Project – Chhattisgarh",
    companyName: "Aceternity UI",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2024 - September 2024",
    points: [
     "Designed to connect the tribal community of Chhattisgarh with essential government schemes and updates through an intuitive, user-friendly interface.",
      " Utilizes React, Tailwind CSS, and GSAP for a smooth and engaging user experience, enhanced by Aceternity UI for visually appealing design.",
      "The platform improves accessibility by simplifying navigation and enhancing content visibility, making important information readily available to all users.",
      "Incorporates animations and responsive design to create an interactive, dynamic browsing experience that drives user engagement and connection.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Aceternity UI",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tribe,
    sourceCodeLink: "https://tribe-community-t448.vercel.app/",
  },
  {
    title: "iPhone 15 Pro 3D Experience",
    companyName: "3d model",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2024 - Feb 2024",
    points: [
      "Developed a fully interactive 3D experience, replicating the Apple iPhone 15 Pro website with advanced visual elements.",
      "Integrated Three.js for dynamic 3D models and custom animations, providing users with an immersive experience.",
      "Utilized GSAP to create smooth transitions and captivating animations for seamless user interaction.",
      "Delivered a responsive design with optimized performance, ensuring compatibility across various devices and platforms.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "gsap",
        color: "pink-text-gradient",
      },
    ],
    image: apple,
    sourceCodeLink: "https://apple-website-inky.vercel.app/",
  },
  {
    title: "MetaVision",
    companyName: "Tailwind",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sep 2023- Oct 2023",
    points: [
      "MetaVision is a modern web application built using Next.js 13, Framer Motion, and Tailwind CSS, delivering a seamless user experience.",
      "The platform features interactive, responsive animations designed for modern web standards, utilizing Framer Motion for smooth transitions and effects.",
      "Tailwind CSS enhances the visual design with a utility-first approach, ensuring flexibility and a clean, polished interface.",
      "Next.js 13 powers efficient server-side rendering, providing optimized performance and scalability for modern web applications.",
    ],
    tags: [
      {
        name: "nextjs13",
        color: "blue-text-gradient",
      },
      {
        name: "framer motion",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: Metaverse,
    sourceCodeLink: "https://metaverse-project-five.vercel.app/",
  },
  {
    title: "3D Apparel Customizer",
    companyName: "Three.js",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "jan 2023- Feb 2023",
    points: [
      "3D Customization: Built using Three.js, this project allows users to interactively customize a 3D shirt model by selecting colors, uploading logos, and applying designs to the entire shirt.",
      "Advanced 3D Rendering: Focuses on realistic rendering with precise control over lighting, camera roll, and ambient light intensity to create a lifelike apparel design experience.",
      "User-Friendly Interface: Seamless integration of user interactions with real-time changes in the 3D model for an intuitive design process.",
      "Dynamic Model Interaction: Optimized for smooth performance, enabling complex design manipulations without compromising speed or quality.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "3d Model",
        color: "pink-text-gradient",
      },
    ],
    image: shirt,
    sourceCodeLink: "https://three-d-shirt-generator.vercel.app/",
  },
  {
    title: "Drone: Military Aviation Technology",
    companyName: "Drone",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "June 2022- July 2022",
    points: [
      "Technological Showcase: This project highlights the latest advancements in military drone technology, focusing on their strategic capabilities and impact in defense operations.",
      "User-Centric Design: Built with HTML, CSS, and JavaScript, the website provides a streamlined and responsive experience, ensuring clear and engaging access to detailed drone information.",
      "Defense Innovation: The site serves as a dedicated platform for demonstrating how drones revolutionize modern defense systems, providing insight into their cutting-edge applications in armed forces.",
      "Engaging Visuals: Emphasizing visual storytelling, the project integrates clean design and interactive elements to enhance user understanding of drone technology.",
    ],
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "framer CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: Drone,
    sourceCodeLink: "http://drone-webpage-u5wi.vercel.app/",
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// const projects: TProject[] = [
//   {
//     name: "Car Rent",
//     description:
//       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carrent,
//     sourceCodeLink: "https://github.com/",
//   },
//   {
//     name: "Job IT",
//     description:
//       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "restapi",
//         color: "green-text-gradient",
//       },
//       {
//         name: "scss",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: jobit,
//     sourceCodeLink: "https://github.com/",
//   },
//   {
//     name: "Trip Guide",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: tripguide,
//     sourceCodeLink: "https://github.com/",
//   },
// ];

const works: TWork[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Templeverse,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: Templeverse,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
]

export { services, technologies, experiences, testimonials, projectswork, works };
