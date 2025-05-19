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
        gpa: "GPA: 4.0",
      },
      {
        year: "2020-2022",
        course: "BTEC Level 3 In Information Technology",
        gpa: "Grade: Distinction",
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
      },
      {
        year: "2024",
        course: "Group Project ",
        gpa: "",
      },
    ],
  },
];

export default AboutMeDetails;
