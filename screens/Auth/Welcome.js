import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { BlurView } from "expo-blur";
import Btn from "../../components/Auth/Btn";

const Container = styled.View`
  flex: 1;
`;
const Image = styled.Image`
  position: absolute;
  z-index: -1;
`;
const Logo = styled.Image`
  width: 100px;
  height: 100px;
  margin-top: 120px;
`;
const BtnContainer = styled.View`
  margin-top: 30px;
`;

const Welcome = ({ navigation }) => {
  const goToSignUp = () => navigation.navigate("SignUp");
  const goToSignIn = () => navigation.navigate("SignIn");
  return (
    <Container>
      <BlurView
        intensity={20}
        tint="light"
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Logo source={require("../../assets/airbnb-logo.png")} />
        <BtnContainer>
          <Btn onPress={goToSignUp} text={"Sign Up"} accent={true} />
          <Btn onPress={goToSignIn} text={"Sign In"} />
        </BtnContainer>
      </BlurView>
      <Image
        resizeMethod="scale"
        source={require("../../assets/loginBg.jpg")}
      />
      <StatusBar barStyle="light-content" />
    </Container>
  );
};

export default Welcome;
