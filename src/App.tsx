import {
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Dashboard } from './components/Dashboard';
import { AchievementPage } from './components/AchievementPage';
import styled from '@emotion/styled';

const Container = styled.div`
  background-color: #444;
`;

const App = () => {
  return (
    <Container>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/:achievementName" element={<AchievementPage />} />
        </Routes>
      </HashRouter>
    </Container>
  );
};

export default App
