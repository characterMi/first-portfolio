import htmlIcon from "../../assets/icons/html5-original.svg";
import cssIcon from "../../assets/icons/css3-original.svg";
import jsIcon from "../../assets/icons/javascript-original.svg";
import tsIcon from "../../assets/icons/icons8-typescript-240.svg";
import reactIcon from "../../assets/icons/react-original.svg";
import Three from "../../assets/icons/threeJs-icon.png"
import gitIcon from "../../assets/icons/git-original.svg";
import nextJs from '../../assets/icons/icons8-nextjs.svg';
import bootstrap from '../../assets/icons/icons8-bootstrap.svg';
import sass from "../../assets/icons/icons8-sass.svg"
import tailwind from "../../assets/icons/tailwind.svg"
import Movies from "../../assets/pics/movies.png";
import Admin_panel from "../../assets/pics/admin-panel.png";
import Customizable_shirt from "../../assets/pics/customizable-shirt.png";
import Hoobank_project from "../../assets/pics/hoobank_project.png";
import Nike_website from "../../assets/pics/nike-website.png";
export { default as DeveloperInfo } from "./DeveloperInfo"
export { default as SkillsComponent } from "./SkillsComponent"
export { default as ParticlesComponent } from "./ParticlesComponent"
export { default as TypingAnimation } from "./TypingAnimation"
export const AllPortfolios = [
    {
        photo: Movies,
        title: "Movie Site",
        moreDescription: "اولین سایت کاملی که درست کردم این سایت بود, میدونم داینامیک نیست ولی دلم نیومد نزارمش, چون هم دیزاینش خوبه هم اینکه کاملا رسپانسیو هست",
        link: "https://github.com/characterMi/movies"
    },
    {
        photo: Hoobank_project,
        title: "Hoobank_UI/UX",
        moreDescription: "یک وب سایت کاملا ریسپانسیو با یک UI/UX عالی",
        link: "https://github.com/characterMi/hoobank_project"
    },
    {
        photo: Nike_website,
        title: "Nike Website",
        moreDescription: "سایت برند [[nike]]",
        link: "https://github.com/characterMi/nike-website"
    },
    {
        photo: Admin_panel,
        title: "Admin Panel UI Design",
        moreDescription: " یک اپلیکیشن ادمین داشبورد با یه دیزاین خفن ! (این سایت کاملا رسپانسیو هست و اینکه اولین پروژه من با استفاده از تایپ اسکریپت و ری اکت در کنار همه)",
        link: "https://github.com/characterMi/react-admin-dashboard"
    },
    {
        photo: Customizable_shirt,
        title: "Customizable shirt",
        moreDescription: "اولین پروژه با threeJs و @react-three/fiber. در این سایت شما میتونین یک مدل لباس سه بعدی که در اختیارتون گذاشته شده رو به دلخواه شخصی سازی کنین",
        link: "https://github.com/characterMi/customizable-shirt"
    },
]
export const htmlSkills = {
    icon: htmlIcon,
    color: "success",
    title: "Html 5"
}
export const cssSkills = {
    icon: cssIcon,
    color: "success",
    title: "Css 3"
}
export const jsSkills = {
    icon: jsIcon,
    color: "success",
    title: "JS"
}
export const tsSkills = {
    icon: tsIcon,
    color: "success",
    title: "TS"
}
export const reactSkills = {
    icon: reactIcon,
    color: "success",
    title: "ReactJs"
}
export const threeSkills = {
    icon: Three,
    color: "success",
    title: "ThreeJs"
}
export const nextSkills = {
    icon: nextJs,
    color: "error",
    title: "NextJs"
}
export const bootstrapSkills = {
    icon: bootstrap,
    color: "success",
    title: "Bootstrap"
}
export const sassSkills = {
    icon: sass,
    color: "error",
    title: "Sass"
}
export const tailwindSkills = {
    icon: tailwind,
    color: "success",
    title: "Tailwind"
}
export const gitSkills = {
    icon: gitIcon,
    color: "success",
    title: "Git"
}