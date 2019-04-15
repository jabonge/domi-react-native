import { createStackNavigator, createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";
import MainScreen from "../screens/Main";

const MainNavigation = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: {
        header: null
      }
    },
    Tabs: {
      screen: TabNavigation,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    headerMode: "screen",
    headerBackTitleVisible: false
  }
);

export default createAppContainer(MainNavigation);
