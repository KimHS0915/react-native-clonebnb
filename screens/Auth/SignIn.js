import { useState } from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input";
import DismissKeyboard from "../../components/DismissKeyboard";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const InputContainer = styled.View`
  margin-bottom: 20px;
`;

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => alert(`${username}, ${password}`);
  return (
    <DismissKeyboard>
      <Container>
        <StatusBar />
        <KeyboardAvoidingView behavior="position">
          <InputContainer>
            <Input
              autoCapitalize="none"
              value={username}
              placeholder="Username"
              stateFn={setUsername}
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

export default SignIn;
