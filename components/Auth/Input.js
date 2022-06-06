import { Dimensions } from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import colors from "../../colors";

const { width } = Dimensions.get("screen");

const Container = styled.TextInput`
  width: ${width / 1.5}px;
  padding: 15px 30px;
  border: 1px solid ${colors.black};
  background-color: white;
  border-radius: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 400;
`;

const Input = ({
  value,
  placeholder,
  isPassword = false,
  autoCapitalize,
  stateFn,
}) => {
  return (
    <Container
      value={value}
      placeholder={placeholder}
      secureTextEntry={isPassword ? true : false}
      autoCapitalize={autoCapitalize}
      onChangeText={(text) => stateFn(text)}
    />
  );
};

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  isPassword: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  stateFn: PropTypes.func.isRequired,
};

export default Input;
