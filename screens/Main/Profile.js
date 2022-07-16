import { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components/native";
import api from "../../api";

const Container = styled.View`
  jstify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 10px;
`;
const Text = styled.Text`
  padding: 5px;
`;

const Profile = ({ user }) => {
  const [userInfo, setUserInfo] = useState({});
  const getUser = async (id, token) => {
    const { data } = await api.getUser(id, token);
    setUserInfo(data);
  };
  useEffect(() => {
    getUser(user.id, user.token);
  }, []);
  return (
    <Container>
      <Text>User Name : {userInfo.username}</Text>
      <Text>Email : {userInfo.email}</Text>
      <Text>First Name : {userInfo.first_name}</Text>
      <Text>Last Name : {userInfo.last_name}</Text>
      <Text>Superhost : {userInfo.superhost ? "Yes" : "No"}</Text>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { user: state.usersReducer };
};

export default connect(mapStateToProps)(Profile);
