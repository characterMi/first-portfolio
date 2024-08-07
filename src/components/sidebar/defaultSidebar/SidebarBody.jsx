import { Tab, Tabs } from "@mui/material";
import { sidebarTabs } from "../../../constants";

const SidebarBody = ({ value, handleChange, tabProps }) => {
  const data = sidebarTabs();
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      className="ul"
      orientation="vertical"
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
    >
      {data.map((tab, index) => (
        <Tab
          sx={{
            "&.MuiTab-root": {
              height: "90px",
            },
            "& .a:hover": {
              transition: "0.5s ease",
              msTransition: "0.5s ease",
              MozTransition: "0.5s ease",
              WebkitTransition: "0.5s ease",
              backgroundColor: "primary.main",
            },
            "& .a:hover .item, & .a:hover .icon": {
              color: "info.main",
            },
          }}
          key={index}
          disableRipple
          className="li"
          label={tab.label}
          {...tabProps(index)}
        />
      ))}
    </Tabs>
  );
};

export default SidebarBody;
