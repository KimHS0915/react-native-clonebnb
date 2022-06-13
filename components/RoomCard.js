import { Dimensions } from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Swiper from "react-native-swiper";

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

const FakeBar = styled.View``;

const RoomCard = ({ id, name, price, photos, isFav, isSuperHost }) => {
  console.log(photos.length);
  return (
    <Container>
      <PhotosContainer>
        {photos.length === 0 ? (
          <SlideImage
            source={require("../assets/defaultRoomPhoto.jpg")}
            resizeMode="repeat"
          />
        ) : (
          <Swiper
            autoplay
            paginationStyle={{ marginBottom: -15 }}
            dotColor={"grey"}
            activeDotColor={"white"}
          >
            {photos.map((photo) => (
              <SlideImage key={photo.id} source={{ uri: photo.file }} />
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
