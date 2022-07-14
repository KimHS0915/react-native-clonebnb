import { useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import RoomPhotos from "../../components/RoomPhotos";
import colors from "../../colors";
import utils from "../../utils";
import RoomMarker from "../../components/RoomMarker";

const Container = styled.View``;

const DataContainer = styled.View`
  padding: 0px 20px;
`;

const Address = styled.Text`
  margin-top: 0px;
  font-size: 20px;
`;

const PropertyInfoContainer = styled.View`
  margin-top: 6px;
  flex-direction: row;
`;

const PropertyInfoData = styled.View`
  background-color: ${colors.green};
  margin-right: 10px;
  border-radius: 5px;
`;

const PropertyInfoText = styled.Text`
  color: white;
  font-weight: 600;
  padding: 6px 10px;
`;

const CheckContainer = styled.View`
  margin-top: 6px;
`;

const CheckTitlecontainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CheckTitle = styled.Text`
  font-size: 18px;
  margin-left: 10px;
`;

const CheckTime = styled.Text`
  margin-top: 8px;
`;

const MapContainer = styled.View`
  width: 100%;
  height: 140px;
  margin-top: 8px;
`;

const Room = ({ route: { params }, navigation }) => {
  useEffect(() => {
    navigation.setOptions({ title: params.name });
  }, []);
  return (
    <Container>
      <RoomPhotos photos={params.photos} factor={2} />
      <DataContainer>
        <Address>{params.address}</Address>
        <PropertyInfoContainer>
          <PropertyInfoData>
            <PropertyInfoText>
              {utils.formatQtt(params.beds, "bed")}
            </PropertyInfoText>
          </PropertyInfoData>
          <PropertyInfoData>
            <PropertyInfoText>
              {utils.formatQtt(params.bedrooms, "bedroom")}
            </PropertyInfoText>
          </PropertyInfoData>
          <PropertyInfoData>
            <PropertyInfoText>
              {utils.formatQtt(params.bathrooms, "bathroom")}
            </PropertyInfoText>
          </PropertyInfoData>
        </PropertyInfoContainer>
        <CheckContainer>
          <CheckTitlecontainer>
            <Ionicons
              name={
                utils.isAndroid() ? "md-timer-outline" : "ios-timer-outline"
              }
              size={24}
            />
            <CheckTitle>Check-in / Check-out</CheckTitle>
          </CheckTitlecontainer>
          <CheckTime>
            {utils.formatTime(params.check_in)} /{" "}
            {utils.formatTime(params.check_out)}
          </CheckTime>
        </CheckContainer>
        <MapContainer>
          <MapView
            camera={{
              center: {
                latitude: parseFloat(params.lat),
                longitude: parseFloat(params.lng),
              },
              altitude: 1600,
              pitch: 50,
              heading: 0,
              zoom: 10,
            }}
            zoomEnabled={false}
            scrollEnabled={false}
            style={{ height: "100%", width: "100%" }}
          >
            <Marker
              coordinate={{
                latitude: parseFloat(params.lat),
                longitude: parseFloat(params.lng),
              }}
            >
              <RoomMarker price={params.price} />
            </Marker>
          </MapView>
        </MapContainer>
      </DataContainer>
    </Container>
  );
};

export default Room;
