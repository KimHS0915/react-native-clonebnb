import styled from "styled-components/native";
import colors from "../colors";

const MarkerWrapper = styled.View`
  align-items: center;
`;

const MarkerContainer = styled.View`
  background-color: ${(props) => (props.selected ? colors.red : colors.green)};
  padding: 10px;
  border-radius: 10px;
  position: relative;
`;

const MarkerTriangle = styled.View`
  border-top-color: ${(props) => (props.selected ? colors.red : colors.green)};
  border: 10px solid transparent;
  width: 10px;
`;

const MarkerText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 600;
`;

const RoomMarker = ({ selected = true, price }) => (
  <MarkerWrapper>
    <MarkerContainer selected={selected}>
      <MarkerText>${price}</MarkerText>
    </MarkerContainer>
    <MarkerTriangle selected={selected} />
  </MarkerWrapper>
);

export default RoomMarker;
