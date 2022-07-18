import { useState, useEffect } from "react";
import api from "../../../api";
import ProfilePresenter from "./ProfilePresenter";

const ProfileContainer = ({ user }) => {
  const [userInfo, setUserInfo] = useState({});
  const getUser = async (id, token) => {
    const { data } = await api.getUser(id, token);
    setUserInfo(data);
  };
  useEffect(() => {
    getUser(user.id, user.token);
  }, []);
  return (
    <ProfilePresenter
      avatar={userInfo.avatar}
      email={userInfo.email}
      firstName={userInfo.first_name}
      lastName={userInfo.last_name}
      superhost={userInfo.superhost}
    />
  );
};

export default ProfileContainer;
