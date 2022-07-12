import { connect } from "react-redux";
import { StyleSheet, Dimensions } from "react-native";
import MapView from "react-native-maps";
import styled from "styled-components/native";

const { width } = Dimensions.get("screen");

const Container = styled.View`
  flex: 1;
  jstify-content: center;
  align-items: center;
`;

const ScrollView = styled.ScrollView`
  position: absolute;
  bottom: 50px;
`;

const RoomContainer = styled.View`
  background-color: transparent;
  width: ${width}px;
  align-items: center;
`;

const RoomCard = styled.View`
  background-color: white;
  width: ${width - 70}px;
  height: 125px;
  margin-right: 20px;
  border-radius: 10px;
  padding: 0px 20px;
  flex-direction: row;
  align-items: center;
`;

const RoomPhoto = styled.Image`
  width: 85px;
  height: 85px;
  borer-radius: 5px;
  margin-right: 10px;
`;

const RoomInfo = styled.View`
  width: 70%;
  padding: 10px;
`;

const RoomName = styled.Text`
  font-size: 18px;
`;

const RoomPrice = styled.Text`
  margin-top: 5px;
  font-size: 14px;
`;

const Map = ({ rooms }) => {
  return (
    <Container>
      <MapView
        style={StyleSheet.absoluteFill}
        camera={{
          center: {
            latitude: parseFloat(rooms[0].lat),
            longitude: parseFloat(rooms[0].lng),
          },
          altitude: 700,
          pitch: 0,
          heading: 0,
          zoom: 10,
        }}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        paddingEnabled
        horizontal
      >
        {rooms?.map((room) => (
          <RoomContainer key={room.id}>
            <RoomCard>
              <RoomPhoto
                source={
                  room.photos[0]?.file
                    ? { uri: room.photos[0]?.file }
                    : require("../../assets/defaultRoomPhoto.jpg")
                }
              />
              <RoomInfo>
                <RoomName>{room.name}</RoomName>
                <RoomPrice>${room.price}</RoomPrice>
              </RoomInfo>
            </RoomCard>
          </RoomContainer>
        ))}
      </ScrollView>
    </Container>
  );
};

const mapStateTpProps = (state) => {
  return { rooms: state.roomsReducer.explore.rooms };
};

export default connect(mapStateTpProps)(Map);
