import { useState, useEffect } from "react";

// Updated skills data with 2 additional skills
const skillsData = [
  {
    id: 1,
    names: ["HTML", "CSS", "JavaScript"],
    icons: ["fa-html5", "fa-css3", "fa-js"],
  },

  {
    id: 2,
    names: ["React", "Vue.js", "Node.js"],
    icons: ["fa-react", "fa-vuejs", "fa-node"],
  },
  {
    id: 3,
    names: ["Java", "C++", "AWS"],
    icons: ["fa-java", "", "fa-aws"],
  },
  {
    id: 4,
    names: ["MongoDb", "Git", "Docker"],
    icons: ["fa-thin fa-database", "fa-git-alt", "fa-docker"],
  },
  {
    id: 5,
    names: ["Figma", "Vue.js", "SQL"],
    icons: ["fa-figma", "fa-vuejs", ""],
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
    names: ["Go", "Golang", "Docker"],
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
      }, 900);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid skillsContent-2337">
      <div className="skills-title">
        <h4>Tools and Technologies</h4>
      </div>
      <div className="grid skills-2337">
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
