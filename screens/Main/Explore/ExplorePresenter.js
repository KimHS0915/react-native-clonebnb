import {
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import styled from "styled-components/native";
import RoomCard from "../../../components/RoomCard";

const Container = styled.View`
  jstify-content: center;
  align-items: center;
  padding-horizontal: 15px;
  flex: 1;
`;

const FakeBar = styled.View`
  height: 40px;
  width: 100%;
  margin: 10px 0px 5px 0px;
  background-color: white;
  box-shadow: 1px 5px 5px rgba(150, 150, 150, 0.5);
  border-radius: 10px;
  justify-content: center;
  padding-left: 10px;
`;

const FakeText = styled.Text`
  font-size: 18px;
  font-weight: 200;
`;

const ExplorePresenter = ({ rooms }) => {
  return (
    <Container>
      {rooms.length === 0 ? (
        <ActivityIndicator color="black" />
      ) : (
        <>
          <FakeBar>
            <FakeText>Search</FakeText>
          </FakeBar>
          <ScrollView
            style={{ width: "100%" }}
            contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 30 }}
            showsVerticalScrollIndicator={false}
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
            <TouchableOpacity>
              <Text>Load More</Text>
            </TouchableOpacity>
          </ScrollView>
        </>
      )}
    </Container>
  );
};

export default ExplorePresenter;
