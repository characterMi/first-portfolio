import { Box, Divider, IconButton, Typography } from "@mui/material";
import { FaRegCopyright } from "react-icons/fa";
import { RiHeart2Fill } from "react-icons/ri";
import { linksData } from "../../../constants";
const CustomizedDrawerFooter = () => {
  return (
    <>
      <Box className="mobile-sidebar__footer-socials">
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
      <Box className="mobile-sidebar__footer">
        <Typography sx={{ fontSize: { xs: "1rem", sm: "1.5rem" } }}>
          طراحی شده با{" "}
          <RiHeart2Fill
            style={{ color: "red", fontSize: "1rem", marginBottom: "-2px" }}
          />
        </Typography>
        <Typography
          variant="subtitle1"
          className="dev-info"
        >
          کپی رایت{" "}
          {new Date().toLocaleDateString("fa-IR-u-nu-latn").split("/")[0]}{" "}
          <FaRegCopyright
            fontSize="16px"
            style={{ marginRight: "5px", marginTop: "-5px" }}
          />
        </Typography>
      </Box>
    </>
  );
};

export default CustomizedDrawerFooter;
