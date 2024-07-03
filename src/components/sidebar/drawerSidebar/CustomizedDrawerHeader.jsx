import { Box, Typography } from "@mui/material";

const CustomizedDrawerHeader = () => {
  return (
    <Box component="div" className="profile">
      <Box component="div" className="pro-info">
        <Typography
          sx={{
            textDecoration: "underline",
            textDecorationColor: "gray",
            MozTextDecorationColor: "gray",
            WebkitTextDecorationColor: "gray",
          }}
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
