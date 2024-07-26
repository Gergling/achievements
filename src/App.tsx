import {
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Dashboard } from './components/dashboard/Dashboard';
import { AchievementPage } from './components/page/AchievementPage';
import styled from '@emotion/styled';
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { getThemeProperty } from "./utils/get-theme-property";

const Container = styled.div`
  background-color: ${getThemeProperty('app.background')};
  color: ${getThemeProperty('app.text')};
  padding: 10px;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <style>
        {`html {
          background-color: ${getThemeProperty('app.background')({ theme })};
        }`}
      </style>
      <Container>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/:achievementName" element={<AchievementPage />} />
          </Routes>
        </HashRouter>
      </Container>
    </ThemeProvider>
  );
};

export default App
