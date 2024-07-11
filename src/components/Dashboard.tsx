import { list } from "../utils/achievement-list"
import { List } from "./Dashboard.style"
import { DashboardAchievement } from "./DashboardAchievement"
import ViewContext from "./ViewContext"

export const Dashboard = () =>
  <ViewContext.Provider value="dashboard">
    <List>
      {list.map(({
        key,
        category,
        subcategory,
        rating,
        date,
        description,
      }) => <DashboardAchievement
        key={key}
        category={category}
        subcategory={subcategory}
        rating={rating}
        date={date}
        description={description}
      />)}
    </List>
  </ViewContext.Provider>
