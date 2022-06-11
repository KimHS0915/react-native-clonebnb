import { useState } from "react";
import { useDispatch } from "react-redux";
import utils from "../../../utils";
import { userLogin } from "../../../redux/usersSlice";
import SignInPresenter from "./SignInPresenter";

const SignInContainer = ({ route: { params } }) => {
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
    <SignInPresenter
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
};

export default SignInContainer;
