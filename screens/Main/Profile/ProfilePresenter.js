import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import { logout } from "../../../redux/usersSlice";
import RoomCard from "../../../components/RoomCard";
import colors from "../../../colors";

const Container = styled.View`
  padding: 10px;
  flex: 1;
`;

const AvatarContainer = styled.View`
  flex: 2;
  margin-top: 3px;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-bottom: 5px;
  overflow: hidden;
`;

const AvatarPhoto = styled.Image`
  border-radius: 90px;
  width: 28%;
  height: 100%;
`;

const InfoContainer = styled.View`
  flex: 3;
  margin-top: 5px;
`;

const EmailContainer = styled.View`
  padding: 5px;
  align-items: center;
`;

const EmailText = styled.Text`
  font-size: 18px;
  font-weight: 600;
`;

const NameContainer = styled.View`
  margin-top: 10px;
  align-items: center;
`;

const NameText = styled.Text`
  font-size: 15px;
  font-weight: 300;
`;

const SuperhostContainer = styled.View`
  margin-top: 5px;
  align-items: center;
  padding: 4px;
  border: 1px solid black;
  border-radius: 4px;
  margin-left: 130px;
  margin-right: 129px;
`;

const SuperhostText = styled.Text`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 10px;
`;

const BtnContainer = styled.View`
  flex-direction: row;
  padding: 20px;
  align-items: center;
`;

const BtnView = styled.View`
  flex: 1;
  background-color: ${colors.black};
  margin-right: 10px;
  border-radius: 5px;
`;

const BtnText = styled.Text`
  text-align: center;
  color: white;
  font-weight: 600;
  padding: 6px 10px;
`;

const RoomsContainer = styled.View`
  padding: 20px;
  flex: 5;
`;

const SV = styled.ScrollView``;

const NoRooms = styled.Text`
  font-size: 36px;
  margin-top: 10px;
`;

const HostingContainer = styled.View`
  margin-left: 75px;
  margin-top: 3px;
  flex-direction: row;
  margin-bottom: 10px;
`;

const HostingTextContainer = styled.View`
  align-items: center;
  padding: 5px;
  border: 1px solid black;
  border-radius: 4px;
  margin-left: 25px;
  margin-right: 30px;
`;

const HostingText = styled.Text`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
`;

const ProfilePresenter = ({ user, dispatch, navigation, toggleHosting }) => {
  return (
    <Container>
      <HostingContainer>
        <HostingTextContainer>
          <HostingText>Hosting</HostingText>
        </HostingTextContainer>
        <TouchableOpacity onPress={toggleHosting}>
          <FontAwesome
            name={user.hosting ? "toggle-on" : "toggle-off"}
            size={28}
            color="black"
          />
        </TouchableOpacity>
      </HostingContainer>
      <AvatarContainer>
        {user.profile.avatar ? (
          <AvatarPhoto source={{ uri: user.profile.avatar }} />
        ) : (
          <AvatarPhoto
            source={require("../../../assets/defaultRoomPhoto.jpg")}
          />
        )}
      </AvatarContainer>
      <InfoContainer>
        <EmailContainer>
          <EmailText>{user.profile.email}</EmailText>
        </EmailContainer>
        <NameContainer>
          <NameText>
            {user.profile.first_name} {user.profile.last_name}
          </NameText>
        </NameContainer>
        {user.profile.superhost ? (
          <SuperhostContainer>
            <SuperhostText>superhost</SuperhostText>
          </SuperhostContainer>
        ) : null}
        <BtnContainer>
          <BtnView>
            <TouchableOpacity onPress={() => dispatch(logout())}>
              <BtnText>Log Out</BtnText>
            </TouchableOpacity>
          </BtnView>
          <BtnView>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Edit", {
                  prevEmail: user.profile.email,
                  prevFirstName: user.profile.first_name,
                  prevLastName: user.profile.last_name,
                })
              }
            >
              <BtnText>Edit</BtnText>
            </TouchableOpacity>
          </BtnView>
        </BtnContainer>
      </InfoContainer>
      <RoomsContainer>
        <SV>
          {user.userRooms && user.userRooms.length !== 0 ? (
            user.userRooms.map((room, index) => (
              <RoomCard
                key={index}
                id={room.id}
                name={room.name}
                price={room.price}
                photos={room.photos}
                isFav={room.is_fav}
                isSuperHost={room.user.superhost}
                roomObj={room}
                myRoom={true}
              />
            ))
          ) : (
            <NoRooms>You don't have any rooms.</NoRooms>
          )}
        </SV>
      </RoomsContainer>
    </Container>
  );
};

export default ProfilePresenter;
