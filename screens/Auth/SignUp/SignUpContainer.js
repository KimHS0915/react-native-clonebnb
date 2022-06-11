import { useState } from "react";
import utils from "../../../utils";
import api from "../../../api";
import SignUpPresenter from "./SignUpPresenter";

const SignUpContainer = ({ navigation: { navigate } }) => {
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
    <SignUpPresenter
      email={email}
      setEmail={setEmail}
      firstName={firstName}
      setFirstName={setFirstName}
      lastName={lastName}
      setLastName={setLastName}
      password={password}
      setPassword={setPassword}
      loading={loading}
      handleSubmit={handleSubmit}
    />
  );
};

export default SignUpContainer;
