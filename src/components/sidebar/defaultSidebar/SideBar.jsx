import { Box, Divider, Fab, SwipeableDrawer } from "@mui/material";
import { BsXCircle } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import "../sidebar.css";

import {
  CustomizedDrawer,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
} from "../sidebarStructure";
const SideBar = ({
  setDrawerActive,
  drawerActive,
  value,
  handleChange,
  isActive,
  toggleSection,
}) => {
  const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };

  return (
    <>
      <Box id="side">
        <Box
          component="section"
          sx={{ display: { xs: "none", md: "block" } }}
          className={isActive ? "active" : ""}
        >
          <Fab
            color="primary"
            sx={{ position: "fixed", top: "0.7rem", left: "1rem" }}
            onClick={toggleSection}
          >
            {isActive ? <FaBars /> : <BsXCircle />}
          </Fab>
          <Box
            className="sidebar"
            sx={{ backgroundColor: "warning.main" }}
            component="div"
          >
            {/* Sidebar Header */}
            <SidebarHeader />
            <Divider variant="middle" />
            {/* Sidebar Content */}
            <SidebarBody
              value={value}
              handleChange={handleChange}
              tabProps={tabProps}
            />
            <Divider variant="middle" />
            {/* Sidebar Footer */}
            <SidebarFooter />
          </Box>
        </Box>
      </Box>
      <SwipeableDrawer
        open={drawerActive}
        variant="temporary"
        onClose={() => setDrawerActive(false)}
        sx={{
          "& .MuiDrawer-paper": { width: { xs: "60%", sm: "50%" } },
          display: { xs: "block", md: "none" },
        }}
      >
        <CustomizedDrawer
          tabProps={tabProps}
          setDrawerActive={setDrawerActive}
          value={value}
          handleChange={handleChange}
        />
      </SwipeableDrawer>
    </>
  );
};

export default SideBar;
