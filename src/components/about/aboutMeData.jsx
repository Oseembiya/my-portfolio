/**
 * About Me data structure
 * Contains education and experience information for the About section
 */

import universityImage from "../../assets/middlesex.png";

/** @type {CategoryItem[]} */
const AboutMeDetails = [
  {
    aboutMe: "Education",
    aboutMeDetails: [
      {
        year: "2022-2025",
        course: "Bachelor Degree In Computer Science",
        institution: "Middlesex University",
        gpa: "GPA: 4.0",
        description:
          "Currently pursuing a Bachelor's degree in Computer Science with a focus on software development and artificial intelligence. Key areas of study include data structures, algorithms, machine learning, and web development. Actively participating in coding competitions and hackathons to enhance practical skills.",
        image: universityImage,
      },
      {
        year: "2020-2022",
        course: "BTEC Level 3 In Information Technology",
        institution: "Newham College of Further Education",
        gpa: "Grade: Distinction",
        description:
          "Completed BTEC Level 3 with distinction, covering fundamental IT concepts, programming basics, and system architecture. Developed strong foundation in problem-solving and technical documentation. Participated in various IT projects and gained hands-on experience with industry-standard tools.",
      },
    ],
  },
  {
    aboutMe: "Experience",
    aboutMeDetails: [
      {
        year: "2025",
        course: "Individual Project / CodeColab",
        gpa: "",
        description:
          "Developed CodeColab, a collaborative coding platform that enables real-time code sharing and pair programming. Implemented features like syntax highlighting, version control integration, and real-time collaboration using WebSocket technology. Built with React, Node.js, and MongoDB.",
      },
      {
        year: "2024",
        course: "Group Project",
        gpa: "",
        description:
          "Led a team of 4 developers in creating a full-stack e-commerce platform. Implemented features including user authentication, product management, shopping cart functionality, and payment integration. Utilized React for frontend, Node.js for backend, and MongoDB for database management.",
      },
    ],
  },
];

export default AboutMeDetails;
