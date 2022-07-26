import { useState } from "react";
import utils from "../../../utils";
import api from "../../../api";
import SignUpPresenter from "./SignUpPresenter";

const SignUpContainer = ({ navigation: { navigate } }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const isValidForm = () => {
    if (password1 !== password2) {
      alert("Invalid password");
      return false;
    }
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password1 === "" ||
      password2 === ""
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
        password: password1,
      });
      if (status === 201) {
        alert("Account created.");
        navigate("SignIn", { email, password1 });
      }
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  };
  const signUpState = {
    email: email,
    setEmail: setEmail,
    firstName: firstName,
    setFirstName: setFirstName,
    lastName: lastName,
    setLastName: setLastName,
    password1: password1,
    setPassword1: setPassword1,
    password2: password2,
    setPassword2: setPassword2,
    hiddenPassword: hiddenPassword,
    setHiddenPassword: setHiddenPassword,
    loading: loading,
  };
  return (
    <SignUpPresenter signUpState={signUpState} handleSubmit={handleSubmit} />
  );
};

export default SignUpContainer;
