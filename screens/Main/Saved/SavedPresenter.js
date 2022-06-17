import styled from "styled-components/native";

const Container = styled.View`
  margin-top: 25px;
  padding: 0px 30px;
`;

const SV = styled.ScrollView``;

const Title = styled.Text`
  font-size: 36px;
  margin-bottom: 10px;
`;

const NoFavs = styled.Text``;

const SavedPresenter = ({ rooms }) => {
  return (
    <Container>
      <Title>Favourites</Title>
      <SV>
        {rooms && rooms.length !== 0 ? (
          rooms.map((room) => (
            <RoomCard
              key={index}
              id={room.id}
              name={room.name}
              price={room.price}
              photos={room.photos}
              isFav={room.is_fav}
              isSuperHost={room.user.superhost}
            />
          ))
        ) : (
          <NoFavs>You don't have any favourites.</NoFavs>
        )}
      </SV>
    </Container>
  );
};

export default SavedPresenter;
