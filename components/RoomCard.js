import styled from "styled-components/native";
import PropTypes from "prop-types";

const Container = styled.View`
width: 100%;
margin-bottom:50px
align-items: flex-start
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

const RoomCard = ({ id, name, price, photos, isFav, isSuperHost }) => {
  return (
    <Container>
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
