import '../sidebar.css';
import { Divider, Box, Tabs, Tab } from "@mui/material";
import { CustomizedDrawerHeader, CustomizedDrawerFooter } from '../sidebarStructure';
import { drawerTabs } from '../../../../tabsData';


const CustomizedDrawer = ({ value, handleChange, setDrawerActive, tabProps }) => {
    const data = drawerTabs();
    return (
        <Box>
            <Box component="section">
                <Box component="div" sx={{ backgroundColor: "warning.main" }} className='sidebar'>
                    {/* Header */}
                    <CustomizedDrawerHeader />
                    <Divider variant="middle" />
                    {/* Main Content */}
                    <Tabs value={value} onChange={handleChange} className="ul" orientation="vertical" scrollButtons="auto" allowScrollButtonsMobile>
                        {data.map((tab, index) => (
                            <Tab sx={{
                                "&.MuiTab-root": {
                                    height: "90px"
                                },
                                "& .a:hover": {
                                    transition: "0.2s ease",
                                    backgroundColor: "primary.main"
                                },
                                "& .a:hover .item, & .a:hover .icon": {
                                    color: "secondary.main"
                                },
                            }} key={index} disableRipple onClick={() => setDrawerActive(false)} className="li" label={tab.label} {...tabProps(index)} />
                        ))}
                    </Tabs>
                    <Divider variant="middle" />
                    {/* Footer */}
                    <CustomizedDrawerFooter />
                </Box>
            </Box>
        </Box>
    )
}

export default CustomizedDrawer;