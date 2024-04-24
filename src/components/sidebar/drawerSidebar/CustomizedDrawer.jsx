import { Box, Divider, Tab, Tabs } from "@mui/material";
import { drawerTabs } from "../../../constants";
import "../sidebar.css";
import {
  CustomizedDrawerFooter,
  CustomizedDrawerHeader,
} from "../sidebarStructure";

const CustomizedDrawer = ({
  value,
  handleChange,
  setDrawerActive,
  tabProps,
}) => {
  const data = drawerTabs();
  return (
    <Box component="section">
      <Box
        component="div"
        sx={{ backgroundColor: "warning.main" }}
        className="sidebar"
      >
        {/* Header */}
        <CustomizedDrawerHeader />
        <Divider variant="middle" />
        {/* Main Content */}
        <Tabs
          value={value}
          onChange={handleChange}
          className="ul"
          orientation="vertical"
          scrollButtons="auto"
          allowScrollButtonsMobile
        >
          {data.map((tab, index) => (
            <Tab
              sx={{
                "&.MuiTab-root": {
                  height: { xs: "70px", sm: "90px" },
                  mt: 1,
                  mb: 1,
                },
                "& .a:hover": {
                  transition: "0.2s ease",
                  backgroundColor: "primary.main",
                },
                "& .a:hover .item, & .a:hover .icon": {
                  color: "info.main",
                },
              }}
              key={index}
              disableRipple
              onClick={() => setDrawerActive(false)}
              className="li"
              label={tab.label}
              {...tabProps(index)}
            />
          ))}
        </Tabs>
        <Divider variant="middle" />
        {/* Footer */}
        <CustomizedDrawerFooter />
      </Box>
    </Box>
  );
};

export default CustomizedDrawer;
