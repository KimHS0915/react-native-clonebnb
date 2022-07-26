import { StatusBar, KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import Btn from "../../../components/Auth/Btn";
import Input from "../../../components/Auth/Input";
import DismissKeyboard from "../../../components/DismissKeyboard";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  flex: 1;
`;

const InputContainer = styled.View`
  margin-bottom: 20px;
`;

const SignUpPresenter = ({ signUpState, handleSubmit }) => {
  return (
    <DismissKeyboard>
      <Container>
        <StatusBar />
        <KeyboardAvoidingView behavior="position">
          <InputContainer>
            <Input
              autoCapitalize="none"
              value={signUpState.email}
              placeholder="Email"
              stateFn={signUpState.setEmail}
              keyboardType={"email-address"}
            />
            <Input
              autoCapitalize="words"
              value={signUpState.firstName}
              placeholder="First name"
              stateFn={signUpState.setFirstName}
            />
            <Input
              autoCapitalize="words"
              value={signUpState.lastName}
              placeholder="Last name"
              stateFn={signUpState.setLastName}
            />
            <Input
              autoCapitalize="none"
              value={signUpState.password1}
              placeholder="Password"
              isPassword={signUpState.hiddenPassword}
              stateFn={signUpState.setPassword1}
            />
            <Input
              autoCapitalize="none"
              value={signUpState.password2}
              placeholder="Confirm password"
              isPassword={signUpState.hiddenPassword}
              stateFn={signUpState.setPassword2}
            />
            <Btn
              loading={signUpState.loading}
              text={signUpState.hiddenPassword ? "Show" : "Hidden"}
              onPress={() =>
                signUpState.setHiddenPassword(!signUpState.hiddenPassword)
              }
            />
          </InputContainer>
          <Btn
            loading={signUpState.loading}
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
