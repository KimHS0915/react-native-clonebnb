import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import ProfilePresenter from "./ProfilePresenter";

const ProfileContainer = ({ user, getUser, getUserRooms, toggleHosting }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  useEffect(() => {
    getUser();
    getUserRooms();
  }, [isFocused]);
  return (
    <ProfilePresenter
      user={user}
      dispatch={dispatch}
      navigation={navigation}
      toggleHosting={toggleHosting}
    />
  );
};

export default ProfileContainer;
