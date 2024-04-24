import { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import "../App.css";
import MainLayout from "../Layout/MainLayout";
import SideBar from "../components/sidebar/defaultSidebar/SideBar";
import { allPages } from "../constants";
import MainContent from "./ContentContainer";
import PagesContainer from "./PagesContainer";
import SidebarContainer from "./SidebarContainer";
const App = () => {
  const [drawerActive, setDrawerActive] = useState(false);

  const [mode, setMode] = useState("blueTheme");

  const [value, setValue] = useState(0);

  const [isActive, setIsActive] = useState(true);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const toggleSection = () => {
    setIsActive(!isActive);
  };

  const handleIndexChange = (index) => {
    setValue(index);
  };

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "blueTheme");
    }

    setMode(localStorage.getItem("theme"));
  }, []);

  const contents = allPages();

  return (
    <MainLayout setMode={setMode} setDrawerActive={setDrawerActive} mode={mode}>
      <SidebarContainer isActive={isActive}>
        <SideBar
          setDrawerActive={setDrawerActive}
          drawerActive={drawerActive}
          value={value}
          handleChange={handleChange}
          toggleSection={toggleSection}
          setIsActive={setIsActive}
          isActive={isActive}
        />
      </SidebarContainer>
      <MainContent isActive={isActive}>
        <SwipeableViews index={value} onChangeIndex={handleIndexChange}>
          {contents.map((content, index) => (
            <PagesContainer key={index} value={value} index={index}>
              {content.value}
            </PagesContainer>
          ))}
        </SwipeableViews>
      </MainContent>
    </MainLayout>
  );
};

export default App;
