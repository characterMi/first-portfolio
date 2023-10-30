import Grid from "@mui/material/Unstable_Grid2";

const SidebarContainer = ({children, isActive}) => {
    return (
        <Grid disableEqualOverflow xs={0} md={isActive ? 3 : 4} lg={isActive ? 2 : 3} sx={{ backgroundColor: 'info.main', height: "100vh", overflowY: "auto"}}>
            {children}
        </Grid>
    )
}

export default SidebarContainer;