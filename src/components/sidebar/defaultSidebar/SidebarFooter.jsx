import { Box, Typography } from "@mui/material";
import { FaRegCopyright } from "react-icons/fa";
import { RiHeart2Fill } from "react-icons/ri";
const SidebarFooter = () => {
  return (
    <>
      <Box
        sx={{
          height: 100,
        }}
        className="sidebar-footer"
      >
        <Typography variant="h5">
          طراحی شده با{" "}
          <RiHeart2Fill
            style={{ color: "red", fontSize: "1rem", marginBottom: "-2px" }}
          />
        </Typography>
        <Typography variant="h6" className="dev-info">
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

export default SidebarFooter;
