import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";
import utils from "../utils";
import { toggleFav } from "../redux/usersSlice";
import colors from "../colors";
import RoomPhotos from "./RoomPhotos";

const Container = styled.View`
  width: 100%;
  margin-bottom: 25px;
  align-items: flex-start;
`;

const Name = styled.Text`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 7px;
`;

const Superhost = styled.Text`
  padding: 3px 5px;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 5px;
`;

const SuperhostText = styled.Text`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 10px;
`;

const PriceContainer = styled.View`
  flex-direction: row;
`;

const PriceText = styled.Text`
  font-size: 16px;
`;

const PriceNumber = styled.Text`
  font-weight: 500;
  font-size: 16px;
`;

const FavButton = styled.View`
  background-color: white;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

const TOpacity = styled.TouchableOpacity`
  position: absolute;
  z-index: 10;
  right: 5px;
  top: 5px;
`;

const getIconName = (isFav) => {
  const isAndroid = utils.isAndroid();
  if (isAndroid) {
    if (isFav) {
      return "md-heart";
    }
    return "md-heart-outline";
  } else {
    if (isFav) {
      return "ios-heart";
    }
    return "ios-heart-outline";
  }
};

const RoomCard = ({
  id,
  name,
  price,
  photos,
  isFav,
  isSuperHost,
  roomObj,
  myRoom = false,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <Container>
      {myRoom ? null : (
        <TOpacity onPress={() => dispatch(toggleFav(id))}>
          <FavButton>
            <Ionicons
              name={getIconName(isFav)}
              size={30}
              color={isFav ? colors.red : colors.black}
            />
          </FavButton>
        </TOpacity>
      )}
      <RoomPhotos photos={photos} />
      {myRoom ? (
        <>
          <Name>{name}</Name>
          <PriceContainer>
            <PriceNumber>${price}</PriceNumber>
            <PriceText> / night</PriceText>
          </PriceContainer>
        </>
      ) : (
        <TouchableOpacity
          style={{ alignItems: "flex-start" }}
          onPress={() => navigation.navigate("RoomDetail", { ...roomObj })}
        >
          {isSuperHost ? (
            <Superhost>
              <SuperhostText>Superhost</SuperhostText>
            </Superhost>
          ) : null}
          <Name>{name}</Name>
          <PriceContainer>
            <PriceNumber>${price}</PriceNumber>
            <PriceText> / night</PriceText>
          </PriceContainer>
        </TouchableOpacity>
      )}
    </Container>
  );
};

RoomCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.string,
    })
  ),
  isFav: PropTypes.bool.isRequired,
  isSuperHost: PropTypes.bool.isRequired,
  roomObj: PropTypes.object.isRequired,
};

export default RoomCard;
