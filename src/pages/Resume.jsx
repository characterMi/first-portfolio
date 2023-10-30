import { Box, Card, CardContent, Typography } from "@mui/material";
import { FaCode } from "react-icons/fa";
import Grid from "@mui/material/Unstable_Grid2";
import BG from "../assets/bg07.webp";
import { DeveloperInfo, SkillsComponent, ParticlesComponent } from "./components";
import { secondLinks } from "../particles/particles";
import { Helmet } from "react-helmet-async";
import DividerStyled from "./components/DividerComponent";
const Resume = () => (
    <Card sx={{
        height: "100vh",
        backgroundImage: `url(${BG})`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        overflowY: "auto"
    }}>
        <Helmet>
            <title>
                Abolfazl Taghadosi | Resume
            </title>
        </Helmet>
        <CardContent sx={{ p: 0, position: "relative" }}>
            <DividerStyled icon={<FaCode color="#fff" style={{ fontSize: "25px", marginRight: "-10px" }} />}>
                رزومه من
            </DividerStyled>
            <Box component="div" sx={{ backgroundColor: "secondary.main", width: "45%", height: "100%", position: "absolute", top: "8%", right: "3%", borderRadius: "20px", boxShadow: "0 0 10px #0c133b" }}>
                <Typography color="info.main" sx={{ textAlign: "center", mt: 1, textShadow: "0 0 10px #000", fontSize: { xs: "2rem", sm: "3rem" } }}>مهارت ها</Typography>
            </Box>
            <Box component="div" sx={{ backgroundColor: "secondary.main", width: "45%", height: "100%", position: "absolute", top: "8%", left: "3%", borderRadius: "20px", boxShadow: "0 0 10px #0c133b" }}>
                <Typography color="info.main" sx={{ textAlign: "center", mt: 1, textShadow: "0 0 10px #000", fontSize: { xs: "2rem", sm: "3rem" } }}>درباره</Typography>
            </Box>
            <Box component="div" sx={{ background: "transparent", backdropFilter: "blur(5px)", boxShadow: "0 0 10px #000", marginTop: {xs: "120px", sm: "180px"}, padding: "0 15px", direction: "ltr" }}>
                <ParticlesComponent value={secondLinks} />
                <Grid container>
                    <DeveloperInfo />
                    <Grid xs={1} />
                    <SkillsComponent />
                </Grid>
            </Box>
        </CardContent>
    </Card>
)

export default Resume;