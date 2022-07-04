import { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import RoomPhotos from "../../components/RoomPhotos";
import colors from "../../colors";
import utils from "../../utils";

const Container = styled.View``;

const DataContainer = styled.View`
  padding: 0px 20px;
`;

const Address = styled.Text`
  margin-top: 20px;
  font-size: 26px;
`;

const PropertyInfoContainer = styled.View`
  margin-top: 20px;
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
  margin-top: 32px;
`;

const CheckTitlecontainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CheckTitle = styled.Text`
  font-size: 20px;
  margin-left: 10px;
`;

const CheckTime = styled.Text`
  margin-top: 16px;
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
      </DataContainer>
    </Container>
  );
};

export default Room;
