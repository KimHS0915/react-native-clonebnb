import { StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../colors";
import Explore from "../screens/Main/Explore";
import MapScreen from "../screens/Main/Map";
import Profile from "../screens/Main/Profile";
import Saved from "../screens/Main/Saved";
import Room from "../screens/Main/Room";
import Search from "../screens/Main/Search";
import utils from "../utils";
import BackBtn from "../components/Auth/BackBtn";

const TabsNavigator = createBottomTabNavigator();

const obj = {
  Explore: "search",
  Saved: "heart",
  Map: "map",
  Profile: "person",
};

const Tabs = () => (
  <TabsNavigator.Navigator
    screenOptions={({ route }) => ({
      tabBarActiveTintColor: colors.red,
      tabBarLabelStyle: {
        textTransform: "uppercase",
        fontWeight: "400",
      },
      tabBarItemStyle: {
        paddingTop: 10,
      },
      tabBarIcon: ({ focused }) => {
        const isAndroid = utils.isAndroid();
        let iconName = `${isAndroid ? "md-" : "ios-"}`;
        iconName += obj[route.name];
        return (
          <Ionicons
            name={iconName}
            size={20}
            color={focused ? colors.red : colors.black}
          />
        );
      },
    })}
  >
    <TabsNavigator.Screen name="Explore" component={Explore} />
    <TabsNavigator.Screen name="Saved" component={Saved} />
    <TabsNavigator.Screen name="Map" component={MapScreen} />
    <TabsNavigator.Screen name="Profile" component={Profile} />
  </TabsNavigator.Navigator>
);

const MainNavigator = createStackNavigator();

export default () => (
  <MainNavigator.Navigator
    mode="modal"
    screenOptions={{
      headerBacktitleVisible: false,
      headerBackImage: () => <BackBtn />,
    }}
  >
    <MainNavigator.Screen
      name="Tabs"
      component={Tabs}
      options={{ headerShown: false }}
    />
    <MainNavigator.Screen
      name="RoomDetail"
      component={Room}
      options={{
        headerTransparent: true,
        headerBackground: () => (
          <BlurView
            intensity={100}
            tint="light"
            style={StyleSheet.absoluteFill}
          />
        ),
      }}
    />
    <MainNavigator.Screen
      name="Search"
      component={Search}
      options={{ headerShown: false }}
    />
  </MainNavigator.Navigator>
);
