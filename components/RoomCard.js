import { Dimensions } from "react-native";
import { useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Swiper from "react-native-web-swiper";
import utils from "../utils";
import { toggleFav } from "../redux/usersSlice";
import colors from "../colors";

const { height } = Dimensions.get("screen");

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

const PhotosContainer = styled.View`
  height: ${height / 4}px;
  width: 100%;
  margin-bottom: 10px;
  overflow: hidden;
`;

const SlideImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const SlideImageContainer = styled.View``;

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

const RoomCard = ({ id, name, price, photos, isFav, isSuperHost }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <TOpacity onPress={() => dispatch(toggleFav(id))}>
        <FavButton>
          <Ionicons
            name={getIconName(isFav)}
            size={30}
            color={isFav ? colors.red : colors.black}
          />
        </FavButton>
      </TOpacity>
      <PhotosContainer>
        {photos.length === 0 ? (
          <SlideImage
            source={require("../assets/defaultRoomPhoto.jpg")}
            resizeMode="repeat"
          />
        ) : (
          <Swiper
            controlsProps={{
              PrevComponent: () => null,
              NextComponent: () => null,
              dotActiveStyle: {
                backgroundColor: "white",
              },
            }}
          >
            {photos.map((photo, index) => (
              <SlideImageContainer key={index}>
                <SlideImage key={photo.id} source={{ uri: photo.file }} />
              </SlideImageContainer>
            ))}
          </Swiper>
        )}
      </PhotosContainer>
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
    </Container>
  );
};

RoomCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.string.isRequired,
    })
  ),
  isFav: PropTypes.bool.isRequired,
  isSuperHost: PropTypes.bool.isRequired,
};

export default RoomCard;
