import styled from "styled-components/native";
import RoomCard from "../../../components/RoomCard";

const Container = styled.View`
  padding: 10px;
  flex: 1;
`;

const AvatarContainer = styled.View`
  flex: 2;
  margin-top: 20px;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-bottom: 10px;
  overflow: hidden;
`;

const AvatarPhoto = styled.Image`
  border-radius: 90px;
  width: 45%;
  height: 100%;
`;

const InfoContainer = styled.View`
  flex: 1;
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

const RoomsContainer = styled.View`
  padding: 20px;
  flex: 3;
`;

const SV = styled.ScrollView``;

const NoRooms = styled.Text`
  font-size: 36px;
  margin-bottom: 10px;
`;

const ProfilePresenter = ({
  avatar,
  email,
  firstName,
  lastName,
  superhost,
  rooms,
}) => {
  return (
    <Container>
      <AvatarContainer>
        {avatar ? (
          <AvatarPhoto source={{ uri: avatar }} />
        ) : (
          <AvatarPhoto
            source={require("../../../assets/defaultRoomPhoto.jpg")}
          />
        )}
      </AvatarContainer>
      <InfoContainer>
        <EmailContainer>
          <EmailText>{email}</EmailText>
        </EmailContainer>
        <NameContainer>
          <NameText>
            {firstName} {lastName}
          </NameText>
        </NameContainer>
        {superhost ? (
          <SuperhostContainer>
            <SuperhostText>superhost</SuperhostText>
          </SuperhostContainer>
        ) : null}
      </InfoContainer>
      <RoomsContainer>
        <SV>
          {rooms && rooms.length !== 0 ? (
            rooms.map((room, index) => (
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
