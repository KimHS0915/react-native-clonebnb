import { StatusBar, KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import Btn from "../../../components/Auth/Btn";
import BtnSmall from "../../../components/Auth/BtnSmall";
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

const BtnContainer = styled.View`
  flex-direction: row;
`;

const EditPresenter = ({ editState, handleSubmit }) => {
  return (
    <DismissKeyboard>
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
                  isPassword={editState.hiddenPassword}
                  stateFn={editState.setPassword1}
                />
                <Input
                  autoCapitalize="none"
                  value={editState.password2}
                  placeholder="Confirm new password"
                  isPassword={editState.hiddenPassword}
                  stateFn={editState.setPassword2}
                />
                <BtnContainer>
                  <BtnSmall
                    loading={editState.loading}
                    text={editState.hiddenPassword ? "Show" : "Hide"}
                    onPress={() =>
                      editState.setHiddenPassword(!editState.hiddenPassword)
                    }
                  />
                  <BtnSmall
                    loading={editState.loading}
                    text={"Cancel"}
                    onPress={() => editState.setChangePassword(false)}
                  />
                </BtnContainer>
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
    </DismissKeyboard>
  );
};

export default EditPresenter;
