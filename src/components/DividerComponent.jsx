import { Chip, Divider, Typography } from "@mui/material";

const DividerStyled = ({ children, icon }) => {
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
            boxShadow: "0 0 10px",
            padding: "20px 15px",
          }}
          icon={icon}
          label={
            <Typography
              color="info.main"
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
