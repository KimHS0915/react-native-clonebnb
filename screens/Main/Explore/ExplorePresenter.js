import styled from "styled-components/native";

const Container = styled.View`
  jstify-content: center;
  align-items: center;
`;
const Text = styled.Text``;

const ExplorePresenter = ({ rooms }) => {
  return (
    <Container>
      <Text>Explore({rooms.length})</Text>
    </Container>
  );
};

export default ExplorePresenter;
