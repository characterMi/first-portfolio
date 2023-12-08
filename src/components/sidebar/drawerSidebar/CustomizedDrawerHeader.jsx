import { Typography, Box } from "@mui/material";
import { FaUser } from "react-icons/fa";

const CustomizedDrawerHeader = () => {
  return (
    <Box component="div" className="profile">
      <Box>
        <FaUser
          sx={{ display: { xs: "none", sm: "block" }, cursor: "pointer" }}
          className="pro-img"
        />
      </Box>
      <Box component="div" className="pro-info">
        <Typography
          sx={{ textDecoration: "underline", textDecorationColor: "gray" }}
          variant="h5"
        >
          ابولفضل تقدسی
        </Typography>
        <Typography sx={{ fontSize: { xs: "1rem", sm: "1.5rem" } }}>
          abolfazl2007fx@gmail.com
        </Typography>
      </Box>
    </Box>
  );
};

export default CustomizedDrawerHeader;
