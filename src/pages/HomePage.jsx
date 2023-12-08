import { Box } from "@mui/material";
import BG from "../assets/bg02.jpeg";
import { links } from "../particles/particles";
import { Helmet } from "react-helmet-async";
import { ParticlesComponent, TypingAnimation } from "../components";

const HomePage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url(${BG})`,
        backgroundPosition: "left",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Helmet>
        <title>Abolfazl Taghadosi | Home</title>
      </Helmet>
      <ParticlesComponent value={links} />
      <Box
        component="div"
        sx={{
          background: "transparent",
          width: { xs: "80%", sm: "60%" },
          padding: "50px 15px 50px",
          height: { xs: "150px", sm: "200px" },
          backdropFilter: "blur(5px)",
          borderRadius: "20px",
          boxShadow: "0 0 10px #000",
        }}
      >
        <TypingAnimation />
      </Box>
    </Box>
  );
};

export default HomePage;
