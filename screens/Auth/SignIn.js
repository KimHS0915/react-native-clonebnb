import { useState } from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input";
import DismissKeyboard from "../../components/DismissKeyboard";
import utils from "../../utils";
import { userLogin } from "../../redux/usersSlice";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const InputContainer = styled.View`
  margin-bottom: 20px;
`;

const SignIn = ({ route: { params } }) => {
  const [email, setEmail] = useState(params?.email);
  const [password, setPassword] = useState(params?.password);
  const dispatch = useDispatch();
  const isValidForm = () => {
    if (email === "" || password === "") {
      alert("All fields are required.");
      return false;
    }
    if (!utils.isEmail(email)) {
      alert("Email is invalid");
      return false;
    }
    return true;
  };
  const handleSubmit = () => {
    if (!isValidForm()) {
      return;
    }
    dispatch(
      userLogin({
        username: email,
        password,
      })
    );
  };
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

export default SignIn;
