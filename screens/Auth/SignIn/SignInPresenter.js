import { StatusBar, KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import Btn from "../../../components/Auth/Btn";
import Input from "../../../components/Auth/Input";
import DismissKeyboard from "../../../components/DismissKeyboard";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const InputContainer = styled.View`
  margin-bottom: 20px;
`;

const SignInPresenter = ({
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
}) => {
  return (
    <DismissKeyboard>
      <Container>
        <StatusBar />
        <KeyboardAvoidingView behavior="position">
          <InputContainer>
            <Input
              autoCapitalize="none"
              value={email}
              placeholder="Email"
              stateFn={setEmail}
              keyboardType="email-address"
            />
            <Input
              autoCapitalize="none"
              value={password}
              placeholder="Password"
              isPassword={true}
              stateFn={setPassword}
            />
          </InputContainer>
          <Btn text={"Sign In"} accent onPress={handleSubmit} />
        </KeyboardAvoidingView>
      </Container>
    </DismissKeyboard>
  );
};

export default SignInPresenter;
