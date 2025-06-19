export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Experience',
    href: '#experience',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
  {
    id: 6,
    name: 'CV',
    href: '/assets/cv-en.pdf',
    download: true,
  },
];

export const myEducation = [
  {
    id: 1,
    college: "CIFP Virgen de Gracia",
    degree: "Intermediate Vocational Training in Microcomputer Systems and Networks",
    duration: "2015 - 2017",
    logo: "/assets/CIFP.png",
    review:
      "During this program, I learned how to set up and manage both Linux and Windows servers, including FTP and IMAP servers. I also gained experience in network configuration, computer assembly, and hardware repair. Additionally, this was my first introduction to programming."
  },
  {
    id: 2,
    college: "CIFP Virgen de Gracia",
    degree: "Advanced Vocational Training in Multiplatform Application Development",
    duration: "2017 - 2019",
    logo: "/assets/CIFP.png",
    review:
      "In this program, I learned the fundamentals of programming, various design patterns, and worked primarily with Java and C# (for .NET). Additionally, I gained experience with relational databases such as SQL Server and MySQL."
  },
  {
    id: 3,
    college: "CIFP Virgen de Gracia",
    degree: "Advanced Vocational Training in Web Development",
    duration: "2023 - 2024",
    logo: "/assets/CIFP.png",
    review:
      "In this program, I advanced my skills and refined my expertise in web development. I learned best practices, development methodologies, and worked with technologies such as React, Next.js, TailwindCSS, TypeScript, Framer Motion, among others."
  },
  {
    id: 4,
    college: "CIFP Virgen de Gracia",
    degree: "Specialization Course in Big Data and Artificial Intelligence",
    duration: "2024 - 2025",
    logo: "/assets/CIFP.png",
    review:
      "In this new course, introduced in Spain in 2022, I am learning about various artificial intelligence and machine learning models, as well as the use of big data for decision-making. I am gaining experience with Python and its most popular libraries for model training, NoSQL databases like MongoDB, Power BI for data visualization, and Hadoop for processing large datasets, among many other tools."
  }
];

export const myProjects = [
  {
    title: "Dcanos Stilista - Hair Salon Management System",
    desc: "This was my first major project, and while there are many aspects to improve, it served as my starting point in web development using a JavaScript framework. The system is designed for hair salon management, allowing hairdressers to control and modify their daily appointments. Clients can also see real-time updates if their appointments are changed.",
    subdesc: "The backend is built with Node.js, the database is powered by MongoDB, and React is used as the framework for the frontend.",
    href: "https://dcanosfront.onrender.com",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/barber.svg",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/react.svg" },
      { id: 2, name: "TailwindCSS", path: "assets/nodejs.svg" },
      { id: 3, name: "TypeScript", path: "/assets/typescript.png" },
      { id: 4, name: "Framer Motion", path: "/assets/mongodb.svg" },
    ],
  },
  {
    title: "Philosophy Quotes - The Wisdom of Great Thinkers",
    desc: "This project aims to create a website showcasing the most profound quotes from the greatest philosophers in history. The platform will provide categorized quotes, biographies of philosophers, and an interactive way for users to explore wisdom across different eras.",
    subdesc: "The website is being developed using Next.js for optimized performance, MongoDB as the database for storing quotes, and TailwindCSS for a clean and modern design.",
    href: "",
    texture: "/textures/project/working.mp4",
    logo: "/assets/philosophy.svg",
    logoStyle: {
      backgroundColor: "#1A202C",
      border: "0.2px solid #4A5568",
      boxShadow: "0px 0px 60px 0px #7180964D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
    ],
  }
];


export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [3, -6, 0] : isMobile ? [5, -5, 0] : isTablet ? [7, -7, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [7, 1, 0] : [10, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-15, 7, 0] : [-20, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Personal Brand",
    pos: "Developer",
    duration: "2025",
    title:
      "Currently focused on building my personal brand, developing and implementing my own applications, and expanding my expertise in web and software development.",
    icon: "/assets/face.jpeg",
    animation: "dancing",
  },
  {
    id: 2,
    name: "Minsait",
    pos: "Software Engineer",
    duration: "2019 - Present",
    title:
      "Currently, I am working on process automation for Banco Santander. My responsibilities include improving and implementing .NET projects, enhancing microservices (also in .NET), managing relational databases such as SQL Server, and developing automation scripts using Lua.",
    icon: "/assets/minsait_logo.jpeg",
    animation: "typing",
  },
  {
    id: 3,
    name: "Dynos Informática",
    pos: "Computer Maintenance Technician",
    duration: "2017",
    title:
      "During my Dual Vocational Training and internship, which totaled nearly 540 hours, I was responsible for equipment maintenance and repairs. I worked on upgrading systems, optimizing performance, and improving hardware components.",
    icon: "/assets/dynos_es_logo.jpeg",
    animation: "salute",
  }
];


export const citiesLabel = [
  {
    lat: 40.4168,
    lng: -3.7038,
    text: 'Madrid',
    color: 'green',
    size: 15,
  },
  {
    lat: 52.3676,
    lng: 4.9041,
    text: 'Amsterdam',
    color: 'white',
    size: 15,
  },
  {
    lat: 55.9533,
    lng: -3.1883,
    text: 'Edinburgh',
    color: 'white',
    size: 15,
  },
  {
    lat: 41.9028,
    lng: 12.4964,
    text: 'Rome',
    color: 'white',
    size: 15,
  },
  {
    lat: 45.4408,
    lng: 12.3155,
    text: 'Venice',
    color: 'white',
    size: 15,
  },
  {
    lat: 43.7696,
    lng: 11.2558,
    text: 'Florence',
    color: 'white',
    size: 15,
  },
  {
    lat: 45.4642,
    lng: 9.19,
    text: 'Milan',
    color: 'white',
    size: 15,
  },
  {
    lat: 51.5074,
    lng: -0.1278,
    text: 'London',
    color: 'white',
    size: 15,
  },
  {
    lat: 50.8503,
    lng: 4.3517,
    text: 'Brussels',
    color: 'white',
    size: 15,
  },
];

// Datos de ciudades visitadas y Madrid
export const citiesVisited = {
  Madrid: { lat: 40.4168, lng: -3.7038, color: 'green' },
  Amsterdam: { lat: 52.3676, lng: 4.9041, color: 'white' },
  Edimburgo: { lat: 55.9533, lng: -3.1883, color: 'white' },
  Roma: { lat: 41.9028, lng: 12.4964, color: 'white' },
  Venecia: { lat: 45.4408, lng: 12.3155, color: 'white' },
  Florencia: { lat: 43.7696, lng: 11.2558, color: 'white' },
  Milán: { lat: 45.4642, lng: 9.19, color: 'white' },
  Londres: { lat: 51.5074, lng: -0.1278, color: 'white' },
  Bruselas: { lat: 50.8503, lng: 4.3517, color: 'white' },
  Estocolmo: { lat: 59.3293, lng: 18.0686, color: 'white' },
};

