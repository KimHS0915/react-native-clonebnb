import { ActivityIndicator, ScrollView, TouchableOpacity } from "react-native";
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

const LoadMore = styled.View`
  width: 100%
  padding: 10px 10px;
  align-items: center;
  background-color: #006a70;
  border-radius: 5px;
  margin-bottom: 30px;
`;

const LoadMoreText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

const ExplorePresenter = ({ rooms, increasePage }) => {
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
            {rooms.map((room, index) => (
              <RoomCard
                key={index}
                id={room.id}
                name={room.name}
                price={room.price}
                photos={room.photos}
                isFav={room.is_fav}
                isSuperHost={room.user.superhost}
              />
            ))}
            <TouchableOpacity onPress={increasePage}>
              <LoadMore>
                <LoadMoreText>Load More</LoadMoreText>
              </LoadMore>
            </TouchableOpacity>
          </ScrollView>
        </>
      )}
    </Container>
  );
};

export default ExplorePresenter;
