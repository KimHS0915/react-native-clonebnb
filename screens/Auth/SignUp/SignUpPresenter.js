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

const SignUpPresenter = ({
  email,
  setEmail,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  password,
  setPassword,
  loading,
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
              keyboardType={"email-address"}
            />
            <Input
              autoCapitalize="words"
              value={firstName}
              placeholder="First name"
              stateFn={setFirstName}
            />
            <Input
              autoCapitalize="words"
              value={lastName}
              placeholder="Last name"
              stateFn={setLastName}
            />
            <Input
              autoCapitalize="none"
              value={password}
              placeholder="Password"
              isPassword={true}
              stateFn={setPassword}
            />
          </InputContainer>
          <Btn
            loading={loading}
            text={"Sign Up"}
            accent
            onPress={handleSubmit}
          />
        </KeyboardAvoidingView>
      </Container>
    </DismissKeyboard>
  );
};

export default SignUpPresenter;
