import "./skills.css";

const skills = [
  { id: 1, name: "HTML", icon: "fa-html5", className: "item-1" },
  { id: 2, name: "CSS", icon: "fa-css3", className: "item-2" },
  { id: 3, name: "JavaScript", icon: "fa-js", className: "item-3" },
  { id: 4, name: "Node.js", icon: "fa-node", className: "item-4" },
  { id: 5, name: "React", icon: "fa-react", className: "item-5" },
  { id: 6, name: "Vue.js", icon: "fa-vuejs", className: "item-6" },
  { id: 7, name: "AWS", icon: "fa-aws", className: "item-7" },
  { id: 8, name: "Java", icon: "fa-java", className: "item-8" },
  { id: 9, name: "C++", icon: null, className: "item-9" },
  { id: 10, name: "Git", icon: "fa-git-alt", className: "item-10" },
];

export default function Skills() {
  return (
    <div className="container-fluid skillsContent_2337">
      <div className="skillsName">
        <h1>Tools and Technologies</h1>
      </div>
      <div className="grid skills_2337">
        {skills.map((skill) => (
          <div key={skill.id} className={skill.className}>
            {skill.icon && <i className={`fa-brands ${skill.icon}`}></i>}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
