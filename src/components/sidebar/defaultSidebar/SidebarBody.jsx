import { Tabs, Tab } from "@mui/material";
import { sidebarTabs } from "../../../constants";

const SidebarBody = ({value, handleChange, tabProps}) => {
    const data = sidebarTabs();
    return (
        <Tabs
            value={value}
            onChange={handleChange}
            className="ul"
            orientation="vertical"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile>
            {data.map((tab, index) => (
                <Tab
                    sx={{
                        "&.MuiTab-root": {
                            height: "90px"
                        },
                        "& .a:hover": {
                            transition: "0.5s ease",
                            backgroundColor: "primary.main"
                        },
                        "& .a:hover .item, & .a:hover .icon": {
                            color: "secondary.main"
                        },
                    }}
                    key={index}
                    disableRipple
                    className="li"
                    label={tab.label}
                    {...tabProps(index)} />
            ))}
        </Tabs>
    )
}

export default SidebarBody;