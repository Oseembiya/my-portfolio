/**
 * About Me data structure
 * @typedef {Object} DetailItem
 * @property {string} year - Year or period
 * @property {string} course - Course or experience description
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
      },
      {
        year: "2020-2022",
        course: "BTEC Level 3 In Information Technology",
      },
      {
        year: "2018-2020",
        course: "BTEC in Information Technology",
      },
    ],
  },
  {
    aboutMe: "Experience",
    aboutMeDetails: [
      {
        year: "2023-Present",
        course: "Freelance Web Developer",
      },
      {
        year: "2022-2023",
        course: "Junior Frontend Developer Intern",
      },
    ],
  },
];

export default AboutMeDetails;
