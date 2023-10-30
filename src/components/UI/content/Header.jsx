import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Logo from "../../../assets/icons/logo.png";

const Header = () => {
  return (
    <>
      <AppBar sx={{ py: 1 }} position='static'>
        <Toolbar>
          <Box component="img" src={Logo} alt="Logo" sx={{ height: { xs: "48px", sm: "56px", md: "64px" } }} />
          <Typography color="warning.main" sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, mr: 2 }} className='name-header'>
            [[ Abolfazl Taghadosi ]]
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}


export default Header;