import { StatusBar, KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import Btn from "../../../components/Auth/Btn";
import Input from "../../../components/Auth/Input";
import DismissKeyboard from "../../../components/DismissKeyboard";

const Container = styled.View`
  margin-top: 30px;
  align-items: center;
  flex: 1;
`;

const InputContainer = styled.View`
  margin-bottom: 10px;
`;

const SV = styled.ScrollView``;

const EditPresenter = ({ editState, handleSubmit }) => {
  return (
    <DismissKeyboard>
      <SV>
        <Container>
          <StatusBar />
          <KeyboardAvoidingView behavior="position">
            <InputContainer>
              <Input
                autoCapitalize="none"
                value={editState.email}
                placeholder="Email"
                stateFn={editState.setEmail}
                keyboardType={"email-address"}
              />
              <Input
                autoCapitalize="words"
                value={editState.firstName}
                placeholder="First name"
                stateFn={editState.setFirstName}
              />
              <Input
                autoCapitalize="words"
                value={editState.lastName}
                placeholder="Last name"
                stateFn={editState.setLastName}
              />
              {editState.changePassword ? (
                <>
                  <Input
                    autoCapitalize="none"
                    value={editState.password1}
                    placeholder="New password"
                    isPassword={true}
                    stateFn={editState.setPassword1}
                  />
                  <Input
                    autoCapitalize="none"
                    value={editState.password2}
                    placeholder="Confirm new password"
                    isPassword={true}
                    stateFn={editState.setPassword2}
                  />
                  <Btn
                    loading={editState.loading}
                    text={"Cancel change password"}
                    onPress={() => editState.setChangePassword(false)}
                  />
                </>
              ) : (
                <Btn
                  loading={editState.loading}
                  text={"Change password"}
                  onPress={() => editState.setChangePassword(true)}
                />
              )}
            </InputContainer>
            <Btn
              loading={editState.loading}
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

export default EditPresenter;
