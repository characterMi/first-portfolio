import { Chip, Divider, Typography, useTheme } from "@mui/material";

const DividerStyled = ({ children, icon, textColor }) => {
  const { palette: { primary: { main } } } = useTheme()

  return (
    <>
      <Divider
        sx={{
          "&::before, &::after": {
            borderColor: "primary.main",
            borderWidth: "3px",
          },
        }}
      >
        <Chip
          sx={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: `0 0 0 3px ${main}`,
            MozBoxShadow: `0 0 0 3px ${main}`,
            WebkitBoxShadow: `0 0 0 3px ${main}`,
            padding: "25px 25px",
            background: "warning.dark",
          }}
          icon={icon}
          label={
            <Typography
              color={textColor || main}
              sx={{ fontSize: { xs: "1.5rem", sm: "2.5rem" } }}
            >
              {children}
            </Typography>
          }
        />
      </Divider>
    </>
  );
};

export default DividerStyled;
