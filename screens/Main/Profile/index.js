import { connect } from "react-redux";
import {
  getUser,
  getUserRooms,
  toggleHosting,
} from "../../../redux/usersSlice";
import Profile from "./ProfileContainer";

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUser()),
    getUserRooms: () => dispatch(getUserRooms()),
    toggleHosting: () => dispatch(toggleHosting()),
  };
};

const mapStateToProps = (state) => {
  return { user: state.usersReducer };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
