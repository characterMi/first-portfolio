import { Box, Typography, Divider, IconButton } from "@mui/material";
import { FaRegCopyright } from "react-icons/fa";
import { linksData } from "../../../constants";
import { RiHeart2Fill } from "react-icons/ri";
const CustomizedDrawerFooter = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {linksData.map((link, index) => (
          <IconButton
            sx={{
              width: { xs: "2rem", sm: "3rem" },
              height: { xs: "2rem", sm: "3rem" },
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
            key={index}
            aria-label={link.name}
          >
            <Box
              component="a"
              sx={{
                color: `${link.color}`,
                fontSize: { xs: "1.7rem", sm: "2rem" },
              }}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </Box>
          </IconButton>
        ))}
      </Box>
      <Divider className="divider" variant="middle" />
      <Box
        sx={{
          height: "max-content",
          width: "max-content",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mx: "auto",
        }}
      >
        <Typography sx={{ fontSize: { xs: "1rem", sm: "1.5rem" } }}>
          طراحی شده با{" "}
          <RiHeart2Fill
            style={{ color: "red", fontSize: "1rem", marginBottom: "-2px" }}
          />
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ display: "flex", alignItems: "center" }}
        >
          کپی رایت 1402 <FaRegCopyright />
        </Typography>
      </Box>
    </>
  );
};

export default CustomizedDrawerFooter;
