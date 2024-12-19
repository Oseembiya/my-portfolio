import { useState, useEffect } from "react";
import "./skills.css";

// Updated skills data with 2 additional skills
const skillsData = [
  {
    id: 1,
    names: ["HTML", "CSS", "JavaScript"],
    icons: ["fa-html5", "fa-css3", "fa-js"],
  },
  {
    id: 2,
    names: ["CSS", "HTML", "JavaScript"],
    icons: ["fa-css3", "fa-html5", "fa-js"],
  },
  {
    id: 3,
    names: ["JavaScript", "React", "Vue.js"],
    icons: ["fa-js", "fa-react", "fa-vuejs"],
  },
  {
    id: 4,
    names: ["Node.js", "Java", "AWS"],
    icons: ["fa-node", "fa-java", "fa-aws"],
  },
  {
    id: 5,
    names: ["React", "Vue.js", "Git"],
    icons: ["fa-react", "fa-vuejs", "fa-git-alt"],
  },
  {
    id: 6,
    names: ["Python", "Django", "Flask"],
    icons: ["fa-python", "fa-django", "fa-flask"],
  }, // New Skill 1
  {
    id: 7,
    names: ["Ruby", "Rails", "Sinatra"],
    icons: ["fa-ruby", "fa-rails", "fa-sass"],
  }, // New Skill 2
  {
    id: 8,
    names: ["Swift", "Xcode", "CocoaPods"],
    icons: ["fa-swift", "fa-xcode", "fa-cocoa"],
  }, // New Skill 3
  {
    id: 9,
    names: ["Go", "Golang", "Kubernetes"],
    icons: ["fa-golang", "fa-kubernetes", "fa-docker"],
  }, // New Skill 4
  {
    id: 10,
    names: ["Scala", "Akka", "Play"],
    icons: ["fa-scala", "fa-akka", "fa-play"],
  }, // New Skill 5
];

export default function Skills() {
  const [currentSkills, setCurrentSkills] = useState(
    skillsData.map((skill) => ({
      icon: skill.icons[0],
      name: skill.names[0],
    }))
  );
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true); // Start fading out
      setTimeout(() => {
        setCurrentSkills((prevSkills) =>
          prevSkills.map((skill, index) => {
            const skillIcons = skillsData[index].icons;
            const skillNames = skillsData[index].names;
            const nextIndex =
              (skillIcons.indexOf(skill.icon) + 1) % skillIcons.length;
            return { icon: skillIcons[nextIndex], name: skillNames[nextIndex] };
          })
        );
        setIsTransitioning(false); // Fade back in
      }, 1000); // Half the total duration (1 second for fade-out)
    }, 10000); // Full interval for updates (10 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid skillsContent_2337">
      <div className="skillsName">
        <h1>Tools and Technologies</h1>
      </div>
      <div className="grid skills_2337">
        {currentSkills.map((skill, index) => (
          <div
            key={skillsData[index].id}
            className={`item-${skillsData[index].id} ${
              isTransitioning ? "fade" : ""
            }`}
          >
            <i className={`fa-brands ${skill.icon}`}></i>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
