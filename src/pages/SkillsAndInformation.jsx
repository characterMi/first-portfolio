import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Helmet } from "react-helmet-async";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import {
  DeveloperInfo,
  ParticlesComponent,
  SkillsContainer,
} from "../components";
import DividerStyled from "../components/DividerComponent";
import { secondLinks } from "../particles/particles";
const SkillsAndInformation = () => {
  const { palette: { warning: { main } } } = useTheme();

  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "primary.light",
        overflowY: "auto",
        borderRadius: "0",
      }}
    >
      <Helmet>
        <title>Abolfazl Taghadosi | Skills</title>
      </Helmet>
      <CardContent sx={{ p: 0, position: "relative" }}>
        <DividerStyled
          icon={
            <BsReverseLayoutTextWindowReverse
              color={main}
              style={{ fontSize: "25px", marginRight: "-5px" }}
            />
          }
          textColor={main}
        >
          مهارت های من
        </DividerStyled>
        <Box
          component="div"
          sx={{
            backgroundColor: "secondary.main",
            width: "45%",
            height: "100%",
            position: "absolute",
            top: "8%",
            right: "3%",
            borderRadius: "20px",
          }}
        >
          <Typography
            color="info.main"
            sx={{
              textAlign: "center",
              mt: 1,
              textShadow: "0 0 10px #000",
              fontSize: { xs: "2rem", sm: "3rem" },
            }}
          >
            مهارت ها
          </Typography>
        </Box>
        <Box
          component="div"
          sx={{
            backgroundColor: "secondary.main",
            width: "45%",
            height: "100%",
            position: "absolute",
            top: "8%",
            left: "3%",
            borderRadius: "20px",
          }}
        >
          <Typography
            color="info.main"
            sx={{
              textAlign: "center",
              mt: 1,
              textShadow: "0 0 10px #000",
              fontSize: { xs: "2rem", sm: "3rem" },
            }}
          >
            درباره
          </Typography>
        </Box>
        <Box
          component="div"
          sx={{
            background: "transparent",
            backdropFilter: "blur(5px)",
            boxShadow: "0 0 10px #000",
            marginTop: { xs: "120px", sm: "180px" },
            padding: "0 15px",
            direction: "ltr",
          }}
        >
          <ParticlesComponent value={secondLinks} />
          <Grid container>
            <DeveloperInfo />
            <SkillsContainer />
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}

export default SkillsAndInformation;
