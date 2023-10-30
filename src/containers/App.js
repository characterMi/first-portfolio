import MainLayout from '../Layout/MainLayout';
import { useEffect, useState } from 'react'
import "../App.css";
import SideBar from '../components/UI/content/sidebar/defaultSidebar/SideBar';
import MainContent from './ContentContainer';
import SwipeableViews from "react-swipeable-views";
import PagesContainer from './PagesContainer';
import SidebarContainer from './SidebarContainer';
import { mainContent } from '../components/pagesData';
const App = () => {
  const [drawerActive, setDrawerActive] = useState(false);
  const [mode, setMode] = useState();
  useEffect(() => {
    setMode("first")
  }, [])
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const [isActive, setIsActive] = useState(true);
  const toggleSection = () => {
    setIsActive(!isActive)
  };
  const handleThemeChange = () => {
    setMode((prevTheme) => prevTheme === "first" ? "second" : "first")
  };
  const handleIndexChange = index => {
    setValue(index)
  }
  const contents = mainContent();
  return (
    <MainLayout  handleThemeChange={handleThemeChange} setDrawerActive={setDrawerActive} mode={mode}>
      <SidebarContainer isActive={isActive}>
        <SideBar setDrawerActive={setDrawerActive} drawerActive={drawerActive} value={value} handleChange={handleChange} toggleSection={toggleSection} setIsActive={setIsActive} isActive={isActive} />
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
  )
}

export default App;
