import { Dimensions } from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Swiper from "react-native-web-swiper";

const { height } = Dimensions.get("screen");

const PhotosContainer = styled.View`
  height: ${(props) => `${height / props.factor}`}px;
  width: 100%;
  margin-bottom: 10px;
  overflow: hidden;
`;

const SlideImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const SlideImageContainer = styled.View``;

const RoomPhotos = ({ photos, factor = 4 }) => (
  <PhotosContainer factor={factor}>
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
);

RoomPhotos.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.string,
    })
  ),
};

export default RoomPhotos;
