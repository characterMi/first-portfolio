import { Box, LinearProgress, Typography } from "@mui/material";

const Skill = ({ icon, color, title, skill }) => {
  return (
    <>
      <Box sx={{ pt: 2, pb: 1 }}>
        <Box className="skill-header">
          <Box component="img" src={icon} sx={{ height: { xs: 30, lg: 40 } }} />
          <Typography
            color="#fff"
            sx={{
              mr: 1,
              fontSize: { xs: "1rem", sm: "1.5rem", lg: "2rem", xl: "2.5rem" },
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box
          className="skill-body"
          sx={{
            pt: 2,
          }}
        >
          <LinearProgress
            variant="determinate"
            value={skill}
            color={color}
            sx={{
              height: { xs: 10, sm: 15, lg: 20, xl: 25 },
              borderRadius: 2,
              MozBorderRadius: 2,
              WebkitBorderRadius: 2,
              width: { xs: "80%", sm: "85%", lg: "90%" },
              position: "absolute",
              right: "0",
            }}
          />
          <Typography
            color="#fff"
            sx={{
              fontSize: { xs: "1rem", sm: "1.5rem" },
              width: { xs: "20%", sm: "15%", lg: "10%" },
              textAlign: "center",
            }}
          >
            {skill}%
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Skill;
