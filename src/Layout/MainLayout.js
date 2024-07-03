import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { Box, Fab, ThemeProvider, Tooltip } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { FaBars } from "react-icons/fa";
import { TbExchange } from "react-icons/tb";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import Header from "../components/Header";
import { allThemes } from "../constants";
import {
  blueTheme,
  goldTheme,
  orangeTheme,
  tealTheme,
} from "./theme/MainTheme";
const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const MainLayout = ({ children, mode, setMode, setDrawerActive }) => {
  let theme;

  switch (mode) {
    case "blueTheme":
      theme = blueTheme;
      break;
    case "orangeTheme":
      theme = orangeTheme;
      break;
    case "tealTheme":
      theme = tealTheme;
      break;
    case "goldTheme":
      theme = goldTheme;
      break;
    default:
      theme = blueTheme;
  }

  const [colorPaletteOpen, setColorPaletteOpen] = useState(false);

  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Header />
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Fab
              color="primary"
              size={window.innerWidth < 600 ? "small" : "large"}
              aria-label="Sidebar"
              sx={{
                position: "fixed",
                top: { xs: "1rem", sm: "0.7rem" },
                left: "1rem",
                width: { xs: "2.5rem", sm: "3.5rem" },
                height: { xs: "2.5rem", sm: "3.5rem" },
              }}
              onClick={() => setDrawerActive(true)}
            >
              <FaBars color="#fff" />
            </Fab>
          </Box>
          <Box>
            <Tooltip title="تغییر تم" arrow>
              <Fab
                sx={{
                  position: "fixed",
                  top: { xs: "1rem", sm: "0.7rem" },
                  left: { xs: "4rem", sm: "5rem" },
                  width: { xs: "2.5rem", sm: "3.5rem" },
                  height: { xs: "2.5rem", sm: "3.5rem" },
                }}
                color="secondary"
                onClick={() => setColorPaletteOpen((prev) => !prev)}
              >
                <TbExchange color="#fff" />
              </Fab>
            </Tooltip>
            <Box
              sx={{
                position: "absolute",
                width: "150px",
                zIndex: 100,
                backgroundColor: "secondary.light",
                p: 1,
                left: "1.5rem",
              }}
              className={colorPaletteOpen ? "themes-visible" : "hidden"}
            >
              {allThemes.map((theme, index) => (
                <Fab
                  key={index}
                  sx={{
                    background: theme.color,
                    mt: 1,
                    width: "2rem",
                    height: "2rem",
                    "&:hover": { background: theme.color },
                    outline: theme.themeName === mode && "1px solid #fff",
                  }}
                  onClick={() => {
                    localStorage.setItem("theme", theme.themeName);

                    setMode(localStorage.getItem("theme"));

                    setColorPaletteOpen(false);
                  }}
                />
              ))}
            </Box>
          </Box>
          <Grid container sx={{ height: "100vh" }}>
            {children}
          </Grid>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MainLayout;
