import { useState } from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input";
import DismissKeyboard from "../../components/DismissKeyboard";
import utils from "../../utils";
import api from "../../api";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const InputContainer = styled.View`
  margin-bottom: 20px;
`;

const SignUp = ({ navigation: { navigate } }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const isValidForm = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      alert("All fields are required.");
      return false;
    }
    if (!utils.isEmail(email)) {
      alert("Please add a valid email");
      return false;
    }
    return true;
  };
  const handleSubmit = async () => {
    if (!isValidForm()) {
      return;
    }
    setLoading(true);
    try {
      const { status } = await api.createAccount({
        username: email,
        first_name: firstName,
        last_name: lastName,
        email,
        password,
      });
      if (status === 201) {
        alert("Account created.");
        navigate("SignIn", { email, password });
      }
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
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

export default SignUp;
