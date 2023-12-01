import { useState, useEffect } from "react";
import { htmlSkills, cssSkills, jsSkills, tsSkills, reactSkills, threeSkills, nextSkills, bootstrapSkills, sassSkills, tailwindSkills, gitSkills } from "./";
import Skills from "./Skills";
import Grid from "@mui/material/Unstable_Grid2"

const SkillComponent = () => {
    const [Html, setHtml] = useState(0)
    const [Css, setCss] = useState(0)
    const [Js, setJs] = useState(0)
    const [Ts, setTs] = useState(0)
    const [React, setReact] = useState(0)
    const [Three, setThree] = useState(0)
    const [Next, setNext] = useState(0)
    const [Bootstrap, setBootstrap] = useState(0)
    const [Sass, setSass] = useState(0)
    const [Tailwind, setTailwind] = useState(0)
    const [Git, setGit] = useState(0)
    useEffect(() => {

        const interval = setInterval(() => {
            setHtml((prevValue) => {
                return Math.min(prevValue + 5, 90)
            });
            setCss((prevValue) => {
                return Math.min(prevValue + 5, 95)
            });
            setSass((prevValue) => {
                return Math.min(prevValue + 5, 90)
            });
            setJs((prevValue) => {
                return Math.min(prevValue + 5, 90)
            });
            setTs((prevValue) => {
                return Math.min(prevValue + 5, 80)
            });
            setBootstrap((prevValue) => {
                return Math.min(prevValue + 5, 90)
            });
            setTailwind((prevValue) => {
                return Math.min(prevValue + 5, 90)
            });
            setReact((prevValue) => {
                return Math.min(prevValue + 5, 90)
            });
            setThree((prevValue) => {
                return Math.min(prevValue + 5, 50)
            });
            setNext((prevValue) => {
                return Math.min(prevValue + 5, 50)
            });
            setGit((prevValue) => {
                return Math.min(prevValue + 5, 70)
            });
        }, 10);

        return () => {
            clearInterval(interval)
        }
    }, []);

    const Skillsloop = [
        {
            icon: htmlSkills.icon,
            color: htmlSkills.color,
            title: htmlSkills.title,
            skill: Html
        },
        {
            icon: cssSkills.icon,
            color: cssSkills.color,
            title: cssSkills.title,
            skill: Css
        },
        {
            icon: sassSkills.icon,
            color: sassSkills.color,
            title: sassSkills.title,
            skill: Sass
        },
        {
            icon: jsSkills.icon,
            color: jsSkills.color,
            title: jsSkills.title,
            skill: Js
        },
        {
            icon: tsSkills.icon,
            color: tsSkills.color,
            title: tsSkills.title,
            skill: Ts
        },
        {
            icon: bootstrapSkills.icon,
            color: bootstrapSkills.color,
            title: bootstrapSkills.title,
            skill: Bootstrap
        },
        {
            icon: tailwindSkills.icon,
            color: tailwindSkills.color,
            title: tailwindSkills.title,
            skill: Tailwind
        },
        {
            icon: reactSkills.icon,
            color: reactSkills.color,
            title: reactSkills.title,
            skill: React
        },
        {
            icon: threeSkills.icon,
            color: threeSkills.color,
            title: threeSkills.title,
            skill: Three
        },
        {
            icon: nextSkills.icon,
            color: nextSkills.color,
            title: nextSkills.title,
            skill: Next
        },
        {
            icon: gitSkills.icon,
            color: gitSkills.color,
            title: gitSkills.title,
            skill: Git
        },
    ]



    return (
        <Grid xs={6}>
            {Skillsloop.map((value, index) => (
                <Skills key={index} icon={value.icon} color={value.color} title={value.title} skill={value.skill} />
            ))}
        </Grid>
    )
}

export default SkillComponent;