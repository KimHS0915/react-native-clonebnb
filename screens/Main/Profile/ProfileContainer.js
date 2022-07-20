import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import api from "../../../api";
import ProfilePresenter from "./ProfilePresenter";

const ProfileContainer = ({ user }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [userInfo, setUserInfo] = useState({});
  const [userRooms, setUserRooms] = useState([]);
  const getUser = async (id, token) => {
    const { data } = await api.getUser(id, token);
    setUserInfo(data);
  };
  const getUserRooms = async (id, token) => {
    const { data } = await api.getUserRooms(id, token);
    setUserRooms(data);
  };
  useEffect(() => {
    getUser(user.id, user.token);
    getUserRooms(user.id, user.token);
  }, [isFocused]);
  return (
    <ProfilePresenter
      avatar={userInfo.avatar}
      email={userInfo.email}
      firstName={userInfo.first_name}
      lastName={userInfo.last_name}
      superhost={userInfo.superhost}
      rooms={userRooms}
      dispatch={dispatch}
      navigation={navigation}
    />
  );
};

export default ProfileContainer;
