import Grid from '@mui/material/Unstable_Grid2';



const MainContent = ({ isActive, children }) => {
    return (
        <Grid xs={12} md={isActive ? 9 : 8} lg={isActive ? 10 : 9} sx={{backgroundColor: "warning.main"}}>
            {children}
        </Grid>
    )
}


export default MainContent;