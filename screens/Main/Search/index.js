import Search from "./SearchContainer";
import { connect } from "react-redux";

const mapStateTpProps = (state) => {
  return { token: state.usersReducer.token };
};

export default connect(mapStateTpProps)(Search);
