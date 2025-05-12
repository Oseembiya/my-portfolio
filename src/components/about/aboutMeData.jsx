/**
 * About Me data structure
 * @typedef {Object} DetailItem
 * @property {string} year - Year or period
 * @property {string} course - Course or experience description
 * @property {string} gpa - GPA or performance metric
 *
 * @typedef {Object} CategoryItem
 * @property {string} aboutMe - Category title
 * @property {DetailItem[]} aboutMeDetails - List of details
 */

/** @type {CategoryItem[]} */
const AboutMeDetails = [
  {
    aboutMe: "Education",
    aboutMeDetails: [
      {
        year: "2022-2025",
        course: "Bachelor Degree In Computer Science",
        gpa: "GPA: 3.8/4.0",
      },
      {
        year: "2020-2022",
        course: "BTEC Level 3 In Information Technology",
        gpa: "Grade: Distinction",
      },
      {
        year: "2018-2020",
        course: "BTEC in Information Technology",
        gpa: "Grade: Merit",
      },
    ],
  },
  {
    aboutMe: "Experience",
    aboutMeDetails: [
      {
        year: "2023-Present",
        course: "Freelance Web Developer",
        gpa: "Projects: 15+",
      },
      {
        year: "2022-2023",
        course: "Junior Frontend Developer Intern",
        gpa: "Rating: 4.9/5",
      },
    ],
  },
];

export default AboutMeDetails;
