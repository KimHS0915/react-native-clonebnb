import { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components/native";
import api from "../../api";

const Container = styled.View`
  padding: 10px;
  flex: 1;
`;

const AvatarContainer = styled.View`
  flex: 1;
  margin-top: 20px;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-bottom: 10px;
  overflow: hidden;
`;

const AvatarPhoto = styled.Image`
  border-radius: 90px;
  width: 50%;
  height: 100%;
`;

const InfoContainer = styled.View`
  flex: 2;
  margin-top: 10px;
`;

const EmailContainer = styled.View`
  padding: 5px;
  align-items: center;
`;

const EmailText = styled.Text`
  font-size: 20px;
  font-weight: 600;
s`;

const NameContainer = styled.View`
  margin-top: 20px;
  align-items: center;
`;

const NameText = styled.Text`
  font-size: 16px;
  font-weight: 300;
`;

const SuperhostContainer = styled.View`
  margin-top: 15px;
  align-items: center;
  padding: 4px;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 5px;
  margin-left: 130px;
  margin-right: 129px;
`;

const SuperhostText = styled.Text`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 10px;
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
      <AvatarContainer>
        {userInfo.avatar ? (
          <AvatarPhoto source={{ uri: userInfo.avatar }} />
        ) : (
          <AvatarPhoto source={require("../../assets/defaultRoomPhoto.jpg")} />
        )}
      </AvatarContainer>
      <InfoContainer>
        <EmailContainer>
          <EmailText>{userInfo.email}</EmailText>
        </EmailContainer>
        <NameContainer>
          <NameText>
            {userInfo.first_name} {userInfo.last_name}
          </NameText>
        </NameContainer>
        {!userInfo.superhost ? (
          <SuperhostContainer>
            <SuperhostText>superhost</SuperhostText>
          </SuperhostContainer>
        ) : null}
      </InfoContainer>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { user: state.usersReducer };
};

export default connect(mapStateToProps)(Profile);
