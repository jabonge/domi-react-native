import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import React from "react";
import Now from "../screens/Now";
import Today from "../screens/Today";
import Weekend from "../screens/Weekend";

const TabNavigation = createBottomTabNavigator(
  {
    Now: {
      screen: Now
    },
    Today: {
      screen: Today
    },
    Weekend: {
      screen: Weekend
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "black",
      inactiveTintColor: "gray",
      labelStyle: {
        fontSize: 20
      },
      style: {
        backgroundColor: "#0984e3"
      },
      tabStyle: {
        marginBottom: 10
      }
    }
  }
);

export default createAppContainer(TabNavigation);
