import { Typography, Box } from "@mui/material";
import { FaRegCopyright } from "react-icons/fa";
import { RiHeart2Fill } from "react-icons/ri";
const SidebarFooter = () => {
  return (
    <>
      <Box
        sx={{
          height: 100,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">
          طراحی شده با{" "}
          <RiHeart2Fill
            style={{ color: "red", fontSize: "1rem", marginBottom: "-2px" }}
          />
        </Typography>
        <Typography variant="h6" sx={{ display: "flex", alignItems: "center" }}>
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
