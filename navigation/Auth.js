import { View, Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import Welcome from "../screens/Welcome";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";

const isAndroid = Platform.OS === "android";

const Auth = createStackNavigator();
export default () => (
  <Auth.Navigator
    mode="modal"
    screenOptions={{
      headerBackTitleVisible: false,
      headerTransparent: true,
      headerBackImage: () => (
        <View style={{ paddingLeft: 20 }}>
          <Ionicons
            name={isAndroid ? "md-arrow-down" : "ios-arrow-down"}
            size={28}
          />
        </View>
      ),
    }}
  >
    <Auth.Screen name="Welcome" component={Welcome} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="SignIn" component={SignIn} />
  </Auth.Navigator>
);
