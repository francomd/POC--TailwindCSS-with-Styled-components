import React, { useContext } from "react";
import tw, { styled } from "twin.macro";
import bgDesktopLight from "../assets/bg-desktop-light.jpg";
import bgDesktopDark from "../assets/bg-desktop-dark.jpg";
import ThemeContext from "../context/themeContext";

const StyledMain = styled.div(() => [
  tw`bg-gray-200 dark:bg-gray-900 min-h-screen flex flex-col items-center pt-16 relative`,
]);
const StyledHeaderBackground = styled.div<{ darkTheme: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 16rem;
  background-image: url(${({ darkTheme }) => (darkTheme ? bgDesktopDark : bgDesktopLight)});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const StyledContainer = styled.main(() => [tw`relative container grid grid-cols-7 content-center`]);
const StyledWrapperChildren = styled.main(() => [
  tw`col-start-1 col-end-8 md:col-start-3 md:col-end-6 px-4 md:px-0 mb-4`,
]);

const Main: React.FC = ({ children }) => {
  const themeContext = useContext(ThemeContext);

  return (
    <StyledMain>
      <StyledHeaderBackground darkTheme={themeContext.theme === "dark"} />
      <StyledContainer>
        <StyledWrapperChildren>{children}</StyledWrapperChildren>
      </StyledContainer>
    </StyledMain>
  );
};

export default Main;
