import { blueTheme, brownTheme, goldTheme, tealTheme, orangeTheme, yellowTheme, redTheme, secondBlueTheme } from './theme/MainTheme';
import { CacheProvider } from '@emotion/react';
import { HelmetProvider } from 'react-helmet-async';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { FaBars } from 'react-icons/fa';
import { TbExchange } from 'react-icons/tb';
import { Fab, Box, Tooltip } from '@mui/material';
import rtlPlugin from 'stylis-plugin-rtl';
import { ThemeProvider } from '@mui/material';
import Header from '../components/Header'
import Grid from '@mui/material/Unstable_Grid2';
import { allThemes } from '../constants';
import { useState } from 'react';
const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin]
})


const MainLayout = ({ children, mode, setMode, setDrawerActive }) => {
    let theme;
    switch (mode) {
        case 'blueTheme':
            theme = blueTheme;
            break;
        case 'orangeTheme':
            theme = orangeTheme;
            break;
        case 'tealTheme':
            theme = tealTheme;
            break;
        case 'brownTheme':
            theme = brownTheme;
            break;
        case 'redTheme':
            theme = redTheme;
            break;
        case 'yellowTheme':
            theme = yellowTheme;
            break;
        case 'goldTheme':
            theme = goldTheme;
            break;
        case 'secondBlueTheme':
            theme = secondBlueTheme;
            break;
        default:
            theme = blueTheme;
    }
    const [colorPaletteOpen, setColorPaletteOpen] = useState(false)

    return (
        <CacheProvider value={cacheRTL}>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    <Header />
                    <Box sx={{ display: { xs: "block", md: "none" } }}>
                        <Fab color="primary" size={window.innerWidth < 600 ? "small" : "large"} aria-label="Sidebar" sx={{ position: "fixed", top: { xs: "1rem", sm: "0.7rem" }, left: "1rem", width: { xs: "2.5rem", sm: "3.5rem" }, height: { xs: "2.5rem", sm: "3.5rem" } }} onClick={() => setDrawerActive(true)}>
                            <FaBars color="#fff" />
                        </Fab>
                    </Box>
                    <Box>
                        <Tooltip title="تغییر تم" arrow>
                            <Fab sx={{ position: "fixed", top: { xs: "1rem", sm: "0.7rem" }, left: { xs: "4rem", sm: "5rem" }, width: { xs: "2.5rem", sm: "3.5rem" }, height: { xs: "2.5rem", sm: "3.5rem" } }} color="secondary" onClick={() => setColorPaletteOpen(prev => !prev)}>
                                <TbExchange color="#fff" />
                            </Fab>
                        </Tooltip>
                        <Box sx={{ display: colorPaletteOpen ? 'flex' : 'none', position: 'absolute', width: '150px', zIndex: 100, backgroundColor: 'secondary.light', p: 1, borderRadius: '0 0 15px 15px', left: '1.5rem', justifyContent: "space-evenly", flexWrap: 'wrap' }}>
                            {allThemes.map((theme, index) => (
                                <Fab
                                    key={index}
                                    sx={{
                                        background: theme.color,
                                        mt: 1,
                                        width: "2rem",
                                        height: "2rem",
                                        "&:hover": { background: theme.color },
                                        outline: theme.themeName === mode && '1px solid #fff'
                                    }}
                                    onClick={() => {
                                        setMode(theme.themeName)
                                        setColorPaletteOpen(false)
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
    )
}

export default MainLayout;