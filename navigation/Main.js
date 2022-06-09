import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../colors";
import Explore from "../screens/Main/Explore";
import MapScreen from "../screens/Main/Map";
import Profile from "../screens/Main/Profile";
import Saved from "../screens/Main/Saved";
import utils from "../utils";

const Main = createBottomTabNavigator();

const obj = {
  Explore: "search",
  Saved: "heart",
  Map: "map",
  Profile: "person",
};

export default () => (
  <Main.Navigator
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
    <Main.Screen name="Explore" component={Explore}></Main.Screen>
    <Main.Screen name="Saved" component={Saved}></Main.Screen>
    <Main.Screen name="Map" component={MapScreen}></Main.Screen>
    <Main.Screen name="Profile" component={Profile}></Main.Screen>
  </Main.Navigator>
);
