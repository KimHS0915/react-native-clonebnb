import Search from "./SearchContainer";
import { connect } from "react-redux";

const mapStateTpProps = (state) => {
  console.log(state.usersReducer.token);
  return { token: state.usersReducer.token };
};

export default connect(mapStateTpProps)(Search);
