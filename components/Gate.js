import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/usersSlice";

export default () => {
  const { isLoggedIn } = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      {isLoggedIn ? (
        <TouchableOpacity onPress={() => dispatch(logout())}>
          <Text>Logout</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => dispatch(login("token"))}>
          <Text>Login</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
