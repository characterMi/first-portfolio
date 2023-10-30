import { HiOutlineUser } from 'react-icons/hi'; import { FaLaptopCode, FaCode, FaGithub, FaInstagram, FaTelegram, FaDiscord } from 'react-icons/fa'; import { BsReverseLayoutTextWindowReverse } from 'react-icons/bs';
import { Box, Typography } from '@mui/material';
import "../App.css";
export const sidebarTabs = () => {
    const tabs = [
        {
            label:
                <span className="a">
                    <span className='icon'>
                        <FaCode />
                    </span>
                    <Typography variant="h4" className="item">صفحه اصلی</Typography>
                </span>
        },
        {
            label:
                <span className="a">
                    <span className='icon'>
                        <BsReverseLayoutTextWindowReverse />
                    </span>
                    <Typography variant="h4" className="item">رزومه من</Typography>
                </span>
        },
        {
            label:
                <span className="a">
                    <span className='icon'>
                        <HiOutlineUser />
                    </span>
                    <Typography variant="h4" className="item">درباره من</Typography>
                </span>
        },
        {
            label:
                <span className="a">
                    <span className='icon'>
                        <FaLaptopCode />
                    </span>
                    <Typography variant="h4" className="item">نمونه کارها</Typography>
                </span>
        }
    ]
    return tabs;
}


export const drawerTabs = () => {
    const tabs = [
        {
            label:
                <span className="a">
                    <Box component="span" className='icon'>
                        <FaCode />
                    </Box>
                    <Typography sx={{display: {xs: "none", sm: "block"}, fontSize: "2rem"}} className="item">صفحه اصلی</Typography>
                </span>
        },
        {
            label:
                <span className="a">
                    <Box component="span" className='icon'>
                        <BsReverseLayoutTextWindowReverse />
                    </Box>
                    <Typography sx={{display: {xs: "none", sm: "block"}, fontSize: "2rem"}} className="item">رزومه من</Typography>
                </span>
        },
        {
            label:
                <span className="a">
                    <Box component="span" className='icon'>
                        <HiOutlineUser />
                    </Box>
                    <Typography sx={{display: {xs: "none", sm: "block"}, fontSize: "2rem"}} className="item">درباره من</Typography>
                </span>
        },
        {
            label:
                <span className="a">
                    <Box component="span" className='icon'>
                        <FaLaptopCode />
                    </Box>
                    <Typography sx={{display: {xs: "none", sm: "block"}, fontSize: "2rem"}} className="item">نمونه کارها</Typography>
                </span>
        }
    ]
    return tabs;
}


export const linksData = [
    {
        href: "https://discord.gg/Kzk2raVv",
        icon: <FaDiscord />,
        name: "Discord",
        color: "#8293ed"
    },
    {
        href: "https://instagram.com/character_mi",
        icon: <FaInstagram sx={{color: "gray"}} />,
        name: "Instagram",
        color: "#cc296c"
    },
    {
        href: "https://github.com/characterMi",
        icon: <FaGithub sx={{color: "gray"}} />,
        name: "Github",
        color: "#2c3456"
    },
    {
        href: "https://t.me/character_mi",
        icon: <FaTelegram sx={{color: "gray"}} />,
        name: "Telegram",
        color: "#2481cc"
    }
]