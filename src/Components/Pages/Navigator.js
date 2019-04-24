import React from "react";
import FormScreen from "./FormScreen.js";
import FormulaScreen from "./FormulaScreen.js";
import InfoScreen from "./InfoScreen.js";
import SettingScreen from "./SettingScreen.js";
import ResultScreen from "./ResultScreen.js";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

const HomeNav = createStackNavigator(
  {
    Home: {
      screen: FormScreen
    }
  },
  {
    defaultNavigationOptions: {
      headerTitle: "TDEE Calculator",
      headerLeft: null,
      headerStyle: {
        backgroundColor: "hsl(200, 72%, 31%)"
      },
      headerTintColor: "hsl(200, 22%, 90%)",
      headerTitleStyle: {
        fontWeight: "600",
        fontFamily: "Roboto",
        fontSize: 18,
        textAlign: "center",
        flex: 1
      }
    }
  }
);

const FormulaNav = createStackNavigator(
  {
    Formula: {
      screen: FormulaScreen
    }
  },
  {
    defaultNavigationOptions: {
      headerTitle: "TDEE Calculator",
      headerLeft: null,
      headerStyle: {
        backgroundColor: "hsl(200, 72%, 31%)"
      },
      headerTintColor: "hsl(200, 22%, 90%)",
      headerTitleStyle: {
        fontWeight: "600",
        fontFamily: "Roboto",
        fontSize: 18,
        textAlign: "center",
        flex: 1
      }
    }
  }
);

const ResultsNav = createStackNavigator(
  {
    Results: {
      screen: ResultScreen
    }
  },
  {
    defaultNavigationOptions: {
      headerTitle: "TDEE Calculator",
      headerLeft: null,
      headerStyle: {
        backgroundColor: "hsl(200, 72%, 31%)"
      },
      headerTintColor: "hsl(200, 22%, 90%)",
      headerTitleStyle: {
        fontWeight: "600",
        fontFamily: "Roboto",
        fontSize: 18,
        textAlign: "center",
        flex: 1
      }
    }
  }
);

const InfoNav = createStackNavigator(
  {
    About: {
      screen: InfoScreen
    }
  },
  {
    defaultNavigationOptions: {
      headerTitle: "TDEE Calculator",
      headerLeft: null,
      headerStyle: {
        backgroundColor: "hsl(200, 72%, 31%)"
      },
      headerTintColor: "hsl(200, 22%, 90%)",
      headerTitleStyle: {
        fontWeight: "600",
        fontFamily: "Roboto",
        fontSize: 18,
        textAlign: "center",
        flex: 1
      }
    }
  }
);

const SettingsNav = createStackNavigator(
  {
    Settings: {
      screen: SettingScreen
    }
  },
  {
    defaultNavigationOptions: {
      headerTitle: "TDEE Calculator",
      headerLeft: null,
      headerStyle: {
        backgroundColor: "hsl(200, 72%, 31%)"
      },
      headerTintColor: "hsl(200, 22%, 90%)",
      headerTitleStyle: {
        fontWeight: "600",
        fontFamily: "Roboto",
        fontSize: 18,
        textAlign: "center",
        flex: 1
      }
    }
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNav,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-person" color={tintColor} size={24} />
        )
      }
    },
    Formula: {
      screen: FormulaNav,
      navigationOptions: {
        tabBarLabel: "Formula",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-flask" color={tintColor} size={24} />
        )
      }
    },
    About: {
      screen: InfoNav,
      navigationOptions: {
        tabBarLabel: "Info",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-bulb" color={tintColor} size={24} />
        )
      }
    },
    Settings: {
      screen: SettingsNav,
      navigationOptions: {
        tabBarLabel: "Settings",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-settings" color={tintColor} size={24} />
        )
      }
    },
    Results: {
      screen: ResultsNav,
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
      style: { backgroundColor: "white", height: 50 },
      activeTintColor: "hsl(200, 72%, 31%)",
      inactiveTintColor: "hsl(211, 10%, 53%)"
    }
  }
);

export default createAppContainer(TabNavigator);
