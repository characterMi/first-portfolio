import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <AppBar sx={{ py: 1 }} position="static">
        <Toolbar>
          <Typography
            color="warning.main"
            sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}
          >
            [[ Abolfazl Taghadosi ]]
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
