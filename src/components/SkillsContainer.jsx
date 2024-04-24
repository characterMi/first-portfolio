import Grid from "@mui/material/Unstable_Grid2";
import { useEffect, useState } from "react";
import {
  bootstrapSkills,
  cssSkills,
  dockerSkills,
  gitSkills,
  htmlSkills,
  jsSkills,
  nextSkills,
  reactSkills,
  sassSkills,
  tailwindSkills,
  threeSkills,
  tsSkills
} from ".";
import Skill from "./Skill";

const SkillsContainer = () => {
  const [technologies, setTechnologies] = useState({
    html: 0,
    css: 0,
    js: 0,
    ts: 0,
    react: 0,
    three: 0,
    next: 0,
    bootstrap: 0,
    sass: 0,
    tailwind: 0,
    git: 0,
    docker: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTechnologies((prev) => ({
        html: Math.min(prev.html + 5, 90),
        css: Math.min(prev.css + 5, 95),
        sass: Math.min(prev.sass + 5, 90),
        js: Math.min(prev.js + 5, 90),
        ts: Math.min(prev.ts + 5, 85),
        bootstrap: Math.min(prev.bootstrap + 5, 80),
        tailwind: Math.min(prev.tailwind + 5, 90),
        react: Math.min(prev.react + 5, 85),
        three: Math.min(prev.three + 5, 50),
        next: Math.min(prev.next + 5, 85),
        git: Math.min(prev.git + 5, 70),
        docker: Math.min(prev.docker + 5, 70),
      }))
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const skillsArray = [
    {
      icon: htmlSkills.icon,
      color: htmlSkills.color,
      title: htmlSkills.title,
      skill: technologies.html,
    },
    {
      icon: cssSkills.icon,
      color: cssSkills.color,
      title: cssSkills.title,
      skill: technologies.css,
    },
    {
      icon: sassSkills.icon,
      color: sassSkills.color,
      title: sassSkills.title,
      skill: technologies.sass,
    },
    {
      icon: jsSkills.icon,
      color: jsSkills.color,
      title: jsSkills.title,
      skill: technologies.js,
    },
    {
      icon: tsSkills.icon,
      color: tsSkills.color,
      title: tsSkills.title,
      skill: technologies.ts,
    },
    {
      icon: bootstrapSkills.icon,
      color: bootstrapSkills.color,
      title: bootstrapSkills.title,
      skill: technologies.bootstrap,
    },
    {
      icon: tailwindSkills.icon,
      color: tailwindSkills.color,
      title: tailwindSkills.title,
      skill: technologies.tailwind,
    },
    {
      icon: reactSkills.icon,
      color: reactSkills.color,
      title: reactSkills.title,
      skill: technologies.react,
    },
    {
      icon: threeSkills.icon,
      color: threeSkills.color,
      title: threeSkills.title,
      skill: technologies.three,
    },
    {
      icon: nextSkills.icon,
      color: nextSkills.color,
      title: nextSkills.title,
      skill: technologies.next,
    },
    {
      icon: gitSkills.icon,
      color: gitSkills.color,
      title: gitSkills.title,
      skill: technologies.git,
    },
    {
      icon: dockerSkills.icon,
      color: dockerSkills.color,
      title: dockerSkills.title,
      skill: technologies.docker,
    },
  ];

  return (
    <Grid xs={6}>
      {skillsArray.map((value, index) => (
        <Skill
          key={index}
          icon={value.icon}
          color={value.color}
          title={value.title}
          skill={value.skill}
        />
      ))}
    </Grid>
  );
};

export default SkillsContainer;
