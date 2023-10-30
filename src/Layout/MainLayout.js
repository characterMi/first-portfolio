import { firstTheme, secondTheme } from './theme/MainTheme';
import { CacheProvider } from '@emotion/react';
import { HelmetProvider } from 'react-helmet-async';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { FaBars } from 'react-icons/fa';
import { TbExchange } from 'react-icons/tb';
import { Fab, Box, Tooltip } from '@mui/material';
import rtlPlugin from 'stylis-plugin-rtl';
import { ThemeProvider } from '@mui/material';
import Header from '../components/UI/content/Header'
import Grid from '@mui/material/Unstable_Grid2';
const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin]
})


const MainLayout = ({ children, mode, handleThemeChange, setDrawerActive }) => {
    const theme = mode === "first" ? firstTheme : secondTheme;

    return (
        <CacheProvider value={cacheRTL}>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    <Box className="app">
                        <Header />
                        <Box sx={{ display: { xs: "block", md: "none" } }}>
                            <Fab color="primary" size={window.innerWidth < 600 ? "small" : "large"} aria-label="Sidebar" sx={{ position: "fixed", top: { xs: "1rem", sm: "0.7rem" }, left: "1rem", width: { xs: "2.5rem", sm: "3.5rem" }, height: { xs: "2.5rem", sm: "3.5rem" } }} onClick={() => setDrawerActive(true)}>
                                <FaBars color="#fff" />
                            </Fab>
                        </Box>
                        <Box >
                            <Tooltip title="تغییر تم" arrow>
                                <Fab sx={{ position: "fixed", top: { xs: "1rem", sm: "0.7rem" }, left: { xs: "4rem", sm: "5rem" }, width: { xs: "2.5rem", sm: "3.5rem" }, height: { xs: "2.5rem", sm: "3.5rem" } }} color="secondary" onClick={handleThemeChange}>
                                    <TbExchange color="#fff" />
                                </Fab>
                            </Tooltip>
                        </Box>
                        <Grid container sx={{ height: "100vh" }}>
                            {children}
                        </Grid>
                    </Box>
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    )
}

export default MainLayout;