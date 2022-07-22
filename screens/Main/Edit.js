import { useState } from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";
import styled from "styled-components/native";
import api from "../../api";
import utils from "../../utils";
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input";
import DismissKeyboard from "../../components/DismissKeyboard";

const Container = styled.View`
  margin-top: 30px;
  align-items: center;
  flex: 1;
`;
const InputContainer = styled.View`
  margin-bottom: 10px;
`;

const SV = styled.ScrollView``;

const Edit = ({ user, route: { params }, navigation: { navigate } }) => {
  const [firstName, setFirstName] = useState(params.prevFirstName);
  const [lastName, setLastName] = useState(params.prevLastName);
  const [email, setEmail] = useState(params.prevEmail);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [changePassword, setChangePassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const isValidForm = () => {
    if (changePassword && (password1 !== password2 || password1 === "")) {
      alert("Invalid password");
      return false;
    }
    if (firstName === "" || lastName === "" || email === "") {
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
      let currentStatus;
      if (changePassword) {
        const { status } = await api.EditProfile(user.id, user.token, {
          username: email,
          first_name: firstName,
          last_name: lastName,
          email,
          password: password1,
        });
        currentStatus = status;
      } else {
        const { status } = await api.EditProfile(user.id, user.token, {
          username: email,
          first_name: firstName,
          last_name: lastName,
          email,
        });
        currentStatus = status;
      }
      if (currentStatus === 200) {
        alert("Profile Edited.");
        navigate("Profile");
      }
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DismissKeyboard>
      <SV>
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
              {changePassword ? (
                <>
                  <Input
                    autoCapitalize="none"
                    value={password1}
                    placeholder="New password"
                    isPassword={true}
                    stateFn={setPassword1}
                  />
                  <Input
                    autoCapitalize="none"
                    value={password2}
                    placeholder="Confirm new password"
                    isPassword={true}
                    stateFn={setPassword2}
                  />
                  <Btn
                    loading={loading}
                    text={"Cancel change password"}
                    onPress={() => setChangePassword(false)}
                  />
                </>
              ) : (
                <Btn
                  loading={loading}
                  text={"Change password"}
                  onPress={() => setChangePassword(true)}
                />
              )}
            </InputContainer>
            <Btn
              loading={loading}
              text={"Edit"}
              accent
              onPress={handleSubmit}
            />
          </KeyboardAvoidingView>
        </Container>
      </SV>
    </DismissKeyboard>
  );
};

const mapStateToProps = (state) => {
  return { user: state.usersReducer };
};

export default connect(mapStateToProps)(Edit);
