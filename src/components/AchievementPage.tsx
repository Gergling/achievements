import { useParams } from "react-router-dom";
import ViewContext from "./ViewContext";

export const AchievementPage = () => {
  const { achievement } = useParams();

  return <ViewContext.Provider value="detail">
    <div>Achievement page ({achievement})!</div>;
  </ViewContext.Provider>
}
