import React from "react";
import FormScreen from "./FormScreen.js";
import FormulaScreen from "./FormulaScreen.js";
import InfoScreen from "./InfoScreen.js";
import SettingScreen from "./SettingScreen.js";
import ResultScreen from "./ResultScreen.js";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: FormScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-person" color={tintColor} size={24} />
        )
      }
    },
    Formula: {
      screen: FormulaScreen,
      navigationOptions: {
        tabBarLabel: "Formula",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-flask" color={tintColor} size={24} />
        )
      }
    },
    About: {
      screen: InfoScreen,
      navigationOptions: {
        tabBarLabel: "Info",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-bulb" color={tintColor} size={24} />
        )
      }
    },
    Settings: {
      screen: SettingScreen,
      navigationOptions: {
        tabBarLabel: "Settings",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-settings" color={tintColor} size={24} />
        )
      }
    },
    Results: {
      screen: ResultScreen,
      navigationOptions: {
        tabBarLabel: "Results",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-pulse" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    order: ["Home", "Results", "Formula", "About", "Settings"],
    navigationOptions: {
      tabBarVisible: true
    },
    tabBarOptions: {
      style: { backgroundColor: "#466DC5", height: 50 },
      activeTintColor: "#f9f9f9",
      inactiveTintColor: "#cccccc"
    }
  }
);

export default createAppContainer(TabNavigator);
