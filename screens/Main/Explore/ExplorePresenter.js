import { ActivityIndicator, ScrollView } from "react-native";
import styled from "styled-components/native";
import RoomCard from "../../../components/RoomCard";

const Container = styled.View`
  jstify-content: center;
  align-items: center;
`;
const Text = styled.Text``;

const ExplorePresenter = ({ rooms }) => {
  return (
    <Container>
      {rooms.length === 0 ? (
        <ActivityIndicator color="black" />
      ) : (
        <ScrollView
          style={{ width: "100%", marginTop: 120 }}
          contentContainerStyle={{ paddingHorizontal: 15 }}
        >
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              id={room.id}
              name={room.name}
              price={room.price}
              photos={room.photos}
              isFav={room.is_fav}
              isSuperHost={room.user.superhost}
            />
          ))}
        </ScrollView>
      )}
    </Container>
  );
};

export default ExplorePresenter;
