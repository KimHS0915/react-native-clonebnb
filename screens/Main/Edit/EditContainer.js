import { useState } from "react";
import api from "../../../api";
import utils from "../../../utils";
import EditPresenter from "./EditPresenter";

const EditContainer = ({
  user,
  route: { params },
  navigation: { navigate },
}) => {
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
  const editState = {
    firstName: firstName,
    setFirstName: setFirstName,
    lastName: lastName,
    setLastName: setLastName,
    email: email,
    setEmail: setEmail,
    password1: password1,
    setPassword1: setPassword1,
    password2: password2,
    setPassword2: setPassword2,
    changePassword: changePassword,
    setChangePassword: setChangePassword,
    loading: loading,
    handleSubmit: handleSubmit,
  };
  return <EditPresenter editState={editState} handleSubmit={handleSubmit} />;
};

export default EditContainer;
