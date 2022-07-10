import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import DismissKeyboard from "../../../components/DismissKeyboard";
import RoomCard from "../../../components/RoomCard";
import colors from "../../../colors";

const Container = styled.View`
  padding: 0px;
`;

const SearchFilterContainer = styled.View``;

const SearchContainer = styled.View`
  margin-top: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const SearchBar = styled.TextInput`
  height: 40px;
  width: 80%;
  background-color: white;
  box-shadow: 1px 5px 5px rgba(200, 200, 200, 0.5);
  border-radius: 7px;
  justify-content: center;
  padding-left: 10px;
`;

const CancelContainer = styled.TouchableOpacity``;

const CancelText = styled.Text``;

const FiltersContainer = styled.ScrollView`
  flex-direction: row;
  margin-top: 10px;
`;

const FilterContainer = styled.View`
  align-items: center;
  margin-right: 15px;
`;

const FilterLabel = styled.Text`
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 5px;
  font-weight: 500;
`;

const Filter = styled.TextInput`
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 1px 2.5px 2.5px rgba(200, 200, 200, 0.5);
  width: 80px;
`;

const SearchBtnContainer = styled.View``;

const SearchBtn = styled.TouchableOpacity`
  background-color: ${colors.green};
  padding: 10px;
  margin: 15px;
  border-radius: 10px;
  align-items: center;
`;

const SearchBtnText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 16px;
`;

const ResultsText = styled.Text`
  margin-top: 10px;
  text-align: center;
  font-size: 16px;
`;

const Results = styled.ScrollView`
  margin-top: 20px;
`;

const SearchPresenter = ({
  navigation,
  beds,
  setBeds,
  bedrooms,
  setBedrooms,
  bathrooms,
  setBathrooms,
  maxPrice,
  setMaxPrice,
  searching,
  searchTrigger,
  results,
}) => {
  return (
    <DismissKeyboard>
      <Container>
        <SearchFilterContainer>
          <SearchContainer>
            <SearchBar autoFocus={true} placeholder="Search by city" />
            <CancelContainer onPress={() => navigation.goBack()}>
              <CancelText>Cancel</CancelText>
            </CancelContainer>
          </SearchContainer>
          <FiltersContainer
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingVertical: 10,
              paddingHorizontal: 20,
            }}
          >
            <FilterContainer>
              <FilterLabel>Beds</FilterLabel>
              <Filter
                value={beds}
                onChangeText={(text) => setBeds(text)}
                placeholder="0"
                keyboardType={"number-pad"}
              />
            </FilterContainer>
            <FilterContainer>
              <FilterLabel>Bedrooms</FilterLabel>
              <Filter
                value={bedrooms}
                onChangeText={(text) => setBedrooms(text)}
                placeholder="0"
                keyboardType={"number-pad"}
              />
            </FilterContainer>
            <FilterContainer>
              <FilterLabel>Bathrooms</FilterLabel>
              <Filter
                value={bathrooms}
                onChangeText={(text) => setBathrooms(text)}
                placeholder="0"
                keyboardType={"number-pad"}
              />
            </FilterContainer>
            <FilterContainer>
              <FilterLabel>Max price</FilterLabel>
              <Filter
                value={maxPrice}
                onChangeText={(text) => setMaxPrice(text)}
                placeholder="0"
                keyboardType={"number-pad"}
              />
            </FilterContainer>
          </FiltersContainer>
        </SearchFilterContainer>
        <SearchBtnContainer>
          <SearchBtn onPress={searching ? null : searchTrigger}>
            {searching ? (
              <ActivityIndicator color="white" />
            ) : (
              <SearchBtnText>Search</SearchBtnText>
            )}
          </SearchBtn>
          {results ? (
            <ResultsText>Showing {results.count} results</ResultsText>
          ) : null}
          <Results contentContainerStyle={{ paddingHorizontal: 15 }}>
            {results?.results.map((room, index) => (
              <RoomCard
                key={index}
                id={room.id}
                name={room.name}
                price={room.price}
                photos={room.photos}
                isFav={room.is_fav}
                isSuperHost={room.user.superhost}
                roomObj={room}
              />
            ))}
          </Results>
        </SearchBtnContainer>
      </Container>
    </DismissKeyboard>
  );
};

export default SearchPresenter;
