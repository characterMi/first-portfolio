import { About, HomePage, MyPortfolios, SkillsAndInformation } from "../pages";
import { HiOutlineUser } from "react-icons/hi";
import {
  FaLaptopCode,
  FaCode,
  FaGithub,
  FaInstagram,
  FaTelegram,
  FaDiscord,
} from "react-icons/fa";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { Box, Typography } from "@mui/material";

export const allPages = () => {
  const pageContent = [
    {
      value: <HomePage />,
    },
    {
      value: <SkillsAndInformation />,
    },
    {
      value: <About />,
    },
    {
      value: <MyPortfolios />,
    },
  ];
  return pageContent;
};

export const sidebarTabs = () => {
  const tabs = [
    {
      label: (
        <span className="a">
          <span className="icon">
            <FaCode />
          </span>
          <Typography variant="h4" className="item">
            صفحه اصلی
          </Typography>
        </span>
      ),
    },
    {
      label: (
        <span className="a">
          <span className="icon">
            <BsReverseLayoutTextWindowReverse />
          </span>
          <Typography variant="h4" className="item">
            مهارت های من
          </Typography>
        </span>
      ),
    },
    {
      label: (
        <span className="a">
          <span className="icon">
            <HiOutlineUser />
          </span>
          <Typography variant="h4" className="item">
            درباره من
          </Typography>
        </span>
      ),
    },
    {
      label: (
        <span className="a">
          <span className="icon">
            <FaLaptopCode />
          </span>
          <Typography variant="h4" className="item">
            نمونه کارها
          </Typography>
        </span>
      ),
    },
  ];
  return tabs;
};

export const drawerTabs = () => {
  const tabs = [
    {
      label: (
        <span className="a">
          <Box component="span" className="icon">
            <FaCode />
          </Box>
          <Typography sx={{ fontSize: "2rem" }} className="item">
            صفحه اصلی
          </Typography>
        </span>
      ),
    },
    {
      label: (
        <span className="a">
          <Box component="span" className="icon">
            <BsReverseLayoutTextWindowReverse />
          </Box>
          <Typography sx={{ fontSize: "2rem" }} className="item">
            مهارت های من
          </Typography>
        </span>
      ),
    },
    {
      label: (
        <span className="a">
          <Box component="span" className="icon">
            <HiOutlineUser />
          </Box>
          <Typography sx={{ fontSize: "2rem" }} className="item">
            درباره من
          </Typography>
        </span>
      ),
    },
    {
      label: (
        <span className="a">
          <Box component="span" className="icon">
            <FaLaptopCode />
          </Box>
          <Typography sx={{ fontSize: "2rem" }} className="item">
            نمونه کارها
          </Typography>
        </span>
      ),
    },
  ];
  return tabs;
};

export const linksData = [
  {
    href: "https://discord.gg/yBBwsemQ",
    icon: <FaDiscord />,
    name: "Discord",
    color: "#8293ed",
  },
  {
    href: "https://instagram.com/character_mi",
    icon: <FaInstagram sx={{ color: "gray" }} />,
    name: "Instagram",
    color: "#cc296c",
  },
  {
    href: "https://github.com/characterMi",
    icon: <FaGithub sx={{ color: "gray" }} />,
    name: "Github",
    color: "#2c3456",
  },
  {
    href: "https://t.me/character_mi",
    icon: <FaTelegram sx={{ color: "gray" }} />,
    name: "Telegram",
    color: "#2481cc",
  },
];

export const allThemes = [
  {
    color: "#32d3e7",
    themeName: "blueTheme",
  },
  {
    color: "#f26f14",
    themeName: "orangeTheme",
  },
  {
    color: "#176b87",
    themeName: "tealTheme",
  },
  {
    color: "#865439",
    themeName: "brownTheme",
  },
  {
    color: "#be3144",
    themeName: "redTheme",
  },
  {
    color: "#ffc436",
    themeName: "yellowTheme",
  },
  {
    color: "#dac0a3",
    themeName: "goldTheme",
  },
  {
    color: "#00fff5",
    themeName: "secondBlueTheme",
  },
];

export const themeHelper = (palette) => {
  return {
    direction: "rtl",
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            marginLeft: "5px",
            marginRight: "5px",
            fontSize: "1rem",
            textTransform: "capitalize",
          },
          sizeLarge: {
            backgroundColor: "info.main",
            border: `1px solid ${palette[2]}`,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            width: "",
            direction: "rtl",
            background: "primary.main",
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          middle: {
            height: "3px",
            width: "80%",
            margin: "10px auto",
            border: "none",
            background: `linear-gradient(90deg, transparent,  ${palette[0]}, transparent)`,
          },
          root: {
            width: "90%",
            margin: "10px auto",
            border: "none",
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textAlign: "start",
          },
        },
      },
      MuiFab: {
        styleOverrides: {
          root: {
            boxShadow: "none",
            fontSize: "1.5rem",
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            width: "50%",
            backgroundColor: palette[2],
          },
        },
      },
      MuiSwipeableDrawer: {
        styleOverrides: {
          paper: {
            width: "50%",
            backgroundColor: palette[2],
          },
        },
      },
    },
    palette: {
      primary: {
        main: palette[0],
      },
      secondary: {
        main: palette[1],
      },
      warning: {
        main: palette[2],
      },
      info: {
        main: palette[3],
      },
    },

    typography: {
      fontFamily: "Kalameh",
      button: {
        fontWeight: "bold",
      },
    },
  };
};
