import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Dashboard } from './components/Dashboard';
import { AchievementPage } from './components/AchievementPage';
import styled from '@emotion/styled';

const Container = styled.div`
  background-color: #444;
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/:achievementName",
    element: <AchievementPage />,
  },
]);

const App = () => (
  <Container>
    <RouterProvider router={router} />
  </Container>
);

export default App
