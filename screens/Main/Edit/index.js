import { connect } from "react-redux";
import Edit from "./EditContainer";

const mapStateToProps = (state) => {
  return { user: state.usersReducer };
};

export default connect(mapStateToProps)(Edit);
