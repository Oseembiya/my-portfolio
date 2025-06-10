import ProfileImage from "../../assets/osee.jpeg";
import CodeColab from "../../assets/CodeColab.png";
import CodeColabServer from "../../assets/CodeColab_Server.png";
import ParentPay from "../../assets/ParentPay .png";
const ProjectDetails = [
  {
    section: "Front-End",
    projects: [
      {
        projectName: "CodeColab",
        description:
          "A collaborative coding platform that allows users to write code together in real-time, built using React and Socket.io.",
        href: "https://codekolab.netlify.app/",
        image: CodeColab,
        tools: [
          "React",
          "CSS",
          "WebRTC",
          "Monaco Editor",
          "Peers.js",
          "Responsive Design",
        ],
        codeLink:
          "https://github.com/Oseembiya/CodeColab_New/tree/main/frontend",
        demoLink: "https://codekolab.netlify.app/",
      },
      {
        projectName: "ParentPay School Activities",
        description:
          "An interactive e-commerce platform for browsing and purchasing school activities and lessons.",
        href: "https://oseembiya.github.io/Vue/",
        image: ParentPay,
        tools: [
          "Vue.js",
          "Bootstrap 5",
          "CSS3",
          "JavaScript",
          "Responsive Design",
        ],
        codeLink: "https://github.com/oseembiya/Vue",
        demoLink: "https://oseembiya.github.io/Vue/",
      },
      {
        projectName: "Portfolio Website",
        description:
          "A professional portfolio website showcasing skills and projects with modern UI/UX principles.",
        href: "https://myportfolio.com",
        image: ProfileImage,
        tools: ["React", "SCSS", "Responsive Design", "Animation"],
        codeLink: "https://github.com/oseembiya/portfolio",
        demoLink: "https://myportfolio.com",
      },
    ],
  },
  {
    section: "Back-End",
    projects: [
      {
        projectName: "CodeColab Server",
        description:
          "A collaborative coding platform that allows users to write code together in real-time, built using React and Socket.io.",
        href: "https://codekolab.netlify.app/",
        image: CodeColabServer,
        tools: [
          "Node.js",
          "WebSocket",
          "Firebase Admin",
          "Cloud Firestore",
          "PeerJS",
          "Express",
        ],
        codeLink:
          "https://github.com/Oseembiya/CodeColab_New/tree/main/backend",
        demoLink: "https://codekolab.netlify.app/",
      },
      {
        // Backend Project
        projectName: "ParentPay Server API",
        description:
          "RESTful API backend for the School Activities Portal, providing endpoints for lesson management, search functionality, and order processing with MongoDB integration.",
        href: "https://vueappliaction-env.eba-qkd3evgp.eu-west-2.elasticbeanstalk.com/",
        image: "/src/assets/ProjectImage2.png",
        tools: [
          "Node.js",
          "Express.js",
          "MongoDB",
          "RESTful API",
          "AWS Elastic Beanstalk",
          "Postman",
        ],
        codeLink: "https://github.com/oseembiya/Server",
        demoLink:
          "https://vueappliaction-env.eba-qkd3evgp.eu-west-2.elasticbeanstalk.com/lessons",
      },
      {
        projectName: "Database Management System",
        description:
          "A comprehensive database management system with data visualization features.",
        href: "https://dbmanager.com",
        image: "/src/assets/businessMan.jpg",
        tools: ["Python", "SQL", "Data Visualization", "Flask"],
        codeLink: "https://github.com/oseembiya/db-manager",
        demoLink: "https://dbmanager.com",
      },
    ],
  },
  {
    section: "Software Engineering",
    projects: [
      {
        projectName: "Secure Voting System",
        description:
          "A robust and secure voting system implemented in C++ with features like voter authentication, real-time vote counting, and data persistence. The system ensures one vote per voter and maintains election integrity through secure data management.",
        href: "https://github.com/oseembiya/VotingSystem",
        image: "/src/assets/voting-system.jpg",
        tools: [
          "C++",
          "OOP",
          "Data Structures",
          "File I/O",
          "Make Build System",
        ],
        codeLink: "https://github.com/oseembiya/VotingSystem",
        demoLink: "https://github.com/oseembiya/VotingSystem#demo",
      },
    ],
  },
  {
    section: "UX Design",
    projects: [
      {
        projectName: "User Flow Optimization",
        description:
          "Improved user flows and journey maps for a fintech application, reducing friction points by 40%.",
        href: "https://userflow.com",
        image: "/src/assets/userflow.jpg",
        tools: ["Figma", "User Research", "Prototyping", "A/B Testing"],
        codeLink: "https://github.com/oseembiya/ux-design",
        demoLink: "https://userflow.com",
      },
      {
        projectName: "Interactive Wireframes",
        description:
          "High-fidelity interactive wireframes for a healthcare application with accessibility features.",
        href: "https://wireframes.com",
        image: "/src/assets/wireframes.jpg",
        tools: ["Adobe XD", "Sketch", "UI Design", "Accessibility"],
        codeLink: "https://github.com/oseembiya/wireframes",
        demoLink: "https://wireframes.com",
      },
    ],
  },
];
export default ProjectDetails;
