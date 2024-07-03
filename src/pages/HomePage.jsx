import { Box, useTheme } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { FaCode } from "react-icons/fa";
import BG from "../assets/bg02.jpeg";
import { ParticlesComponent, TypingAnimation } from "../components";
import DividerStyled from "../components/DividerComponent";
import { links } from "../particles/particles";

const HomePage = () => {
  const { palette: { info: { main } } } = useTheme()

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url(${BG})`,
        backgroundPosition: "left",
        backgroundSize: "cover",
        MozBackgroundSize: "cover",
        WebkitBackgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        overflowY: "auto",
      }}
    >
      <Helmet>
        <title>Abolfazl Taghadosi | Home</title>
      </Helmet>
      <DividerStyled
        icon={
          <FaCode
            color={main}
            style={{ fontSize: "25px", marginRight: "-10px" }}
          />
        }
        textColor="info.main"
      >
        صفحه اصلی
      </DividerStyled>
      <ParticlesComponent value={links} />
      <Box
        component="div"
        sx={{
          background: "transparent",
          width: { xs: "80%", sm: "60%" },
          padding: "50px 15px 50px",
          height: { xs: "150px", sm: "200px" },
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          borderRadius: "20px",
          MozBorderRadius: "20px",
          WebkitBorderRadius: "20px",
          boxShadow: "0 0 10px #000",
          MozBoxShadow: "0 0 10px #000",
          WebkitBoxShadow: "0 0 10px #000",
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          msTransform: 'translate(-50%, -50%)',
          WebkitTransform: 'translate(-50%, -50%)',
          MozTransform: 'translate(-50%, -50%)',
          OTransform: 'translate(-50%, -50%)',
        }}
      >
        <TypingAnimation />
      </Box>
    </Box>
  );
};

export default HomePage;
