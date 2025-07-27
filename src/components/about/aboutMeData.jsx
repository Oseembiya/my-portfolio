/**
 * About Me data structure
 * Contains education and experience information for the About section
 */

// Define the data structure types for better documentation
/**
 * @typedef {Object} DetailItem
 * @property {string} year - The year or time period
 * @property {string} course - The course or project name
 * @property {string} institution - The institution or organization
 * @property {string} description - Detailed description
 */

/**
 * @typedef {Object} CategoryItem
 * @property {string} aboutMe - Category name (Education/Experience)
 * @property {DetailItem[]} aboutMeDetails - Array of detail items
 */

/** @type {CategoryItem[]} */
const AboutMeDetails = [
  {
    aboutMe: "Education",
    aboutMeDetails: [
      {
        year: "2022-2025",
        course: "Bachelor Degree In Computer Science",
        institution: "Middlesex University",
        description:
          "Graduated with First Class Honours, with a strong focus on software development, artificial intelligence, and full-stack web technologies. Key modules included: \n\n" +
          "• Data Science & Artificial Intelligence.\n" +
          "• Web Applications & Databases.\n" +
          "• Software Engineering Management & Development.\n" +
          "• Operating Systems & Computer Networks.\n" +
          "• Object-Oriented Programming (OOP).\n\n" +
          "Applied academic knowledge in practical projects, enhancing skills in problem-solving, teamwork, and technical documentation.\n\n" +
          "• Code Collab – A real-time collaborative coding platform built with React.js, Socket.io, Firebase Auth, and WebRTC for video/audio.\n" +
          "• Neptune Find – An AI-powered search engine using Next.js, TypeScript, Tailwind CSS, and a custom scoring algorithm for intelligent ranking.\n" +
          "• ParentPay – A dynamic fee management app using Vue.js, Express.js, and MongoDB, with real-time API integration.\n\n" +
          "Also completed the Google UX Design Certificate (2025) with a 93.98% grade, gaining practical skills in accessibility (WCAG), usability, and Figma-based wireframing.\n\n" +
          "These experiences deepened my proficiency in modern JavaScript frameworks, API integration, performance optimization, and accessible UX design.",
      },
      {
        year: "2020-2022",
        course: "BTEC Level 3 In Information Technology",
        institution: "Newham College of Further Education",
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
        institution: "Middlesex University",
        description:
          "Developed CodeCollab, a collaborative coding platform that enables real-time code sharing and pair programming. Implemented features like syntax highlighting, version control integration, and real-time collaboration using WebSocket technology. Built with React, Node.js, and MongoDB.",
      },
      {
        year: "2025",
        course: "Group Project / Data Science & Artificial Intelligence",
        institution: "Middlesex University",
        description:
          "As part of a three-member team, I actively contributed to a comprehensive AI project solving a real-world problem using deep learning and data science. My responsibilities included:\n\n" +
          "• Data Collection & Preprocessing: Identified and gathered relevant datasets, cleaned and preprocessed data (handling missing values, encoding, normalization), and performed exploratory data analysis (EDA) using Python (Pandas, Matplotlib, Seaborn).\n\n" +
          "• Model Development & Evaluation: Built and evaluated machine learning and deep learning models with TensorFlow and Keras, experimented with neural network architectures (CNNs/LSTMs), tuned hyperparameters, and assessed performance using metrics like accuracy, precision, recall, F1-score, and confusion matrix.\n\n" +
          "• Ethical & EDI Considerations: Analyzed ethical risks (bias, transparency, explainability) and ensured alignment with Equality, Diversity, and Inclusion (EDI) principles by reviewing and mitigating potential biases.\n\n" +
          "• Documentation & Communication: Co-authored the final report (methodology, results, ethics), created data visualizations, and presented outcomes during lab milestones, contributing to group discussions and decisions.",
      },
    ],
  },
];

export default AboutMeDetails;
