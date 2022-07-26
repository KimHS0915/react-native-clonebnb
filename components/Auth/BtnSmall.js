import { TouchableOpacity, Dimensions, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import colors from "../../colors";

const { width } = Dimensions.get("screen");

const Button = styled.View`
  padding: 15px 0px;
  margin-bottom: 20px;
  margin-horizontal: 8px;
  align-items: center;
  border: 1px solid ${(props) => (props.accent ? "transparent" : colors.black)}
  border-radius: 20px;
  width: ${width / 3.5}px;
  background-color: ${(props) => (props.accent ? colors.red : "transparent")};
`;
const Text = styled.Text`
  color: ${(props) => (props.accent ? "white" : "black")};
  font-size: 16px;
  font-weight: 500;
`;

const BtnSmall = ({ loading = false, onPress, text, accent = false }) => (
  <TouchableOpacity onPress={loading ? null : onPress}>
    <Button accent={accent}>
      {loading ? (
        <ActivityIndicator color={accent ? "white" : "black"} />
      ) : (
        <Text accent={accent}>{text}</Text>
      )}
    </Button>
  </TouchableOpacity>
);

BtnSmall.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  accent: PropTypes.bool,
  loading: PropTypes.bool,
};

export default BtnSmall;
