import { connect } from "react-redux";
import Profile from "./ProfileContainer";

const mapStateToProps = (state) => {
  return { user: state.usersReducer };
};

export default connect(mapStateToProps)(Profile);
