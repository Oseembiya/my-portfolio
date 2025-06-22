/**
 * About Me data structure
 * Contains education and experience information for the About section
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
        gpa: "GPA: First Class",
        description:
          "Currently pursuing a Bachelor's degree in Computer Science with a focus on software development and artificial intelligence. Key areas of study include data structures, algorithms, machine learning, and web development. Actively participating in coding competitions and hackathons to enhance practical skills.",
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
        institution: "Middlesex University",
        description:
          "Developed CodeColab, a collaborative coding platform that enables real-time code sharing and pair programming. Implemented features like syntax highlighting, version control integration, and real-time collaboration using WebSocket technology. Built with React, Node.js, and MongoDB.",
      },
      {
        year: "2024",
        course: "Group Project/Data Science & AI",
        institution: "Middlesex University",
        description:
          "As part of a three-member team, I actively contributed to a comprehensive AI project solving a real-world problem using deep learning and data science. My responsibilities included:\n\n" +
          "• Data Collection & Preprocessing: Identified and gathered relevant datasets, cleaned and preprocessed data (handling missing values, encoding, normalization), and performed exploratory data analysis (EDA) using Python (Pandas, Matplotlib, Seaborn).\n" +
          "• Model Development & Evaluation: Built and evaluated machine learning and deep learning models with TensorFlow and Keras, experimented with neural network architectures (CNNs/LSTMs), tuned hyperparameters, and assessed performance using metrics like accuracy, precision, recall, F1-score, and confusion matrix.\n" +
          "• Ethical & EDI Considerations: Analyzed ethical risks (bias, transparency, explainability) and ensured alignment with Equality, Diversity, and Inclusion (EDI) principles by reviewing and mitigating potential biases.\n" +
          "• Documentation & Communication: Co-authored the final report (methodology, results, ethics), created data visualizations, and presented outcomes during lab milestones, contributing to group discussions and decisions.",
      },
    ],
  },
];

export default AboutMeDetails;
