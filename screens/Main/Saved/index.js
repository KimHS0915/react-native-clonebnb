import { connect } from "react-redux";
import { getFavs } from "../../../redux/usersSlice";
import Saved from "./SavedContainer";

const mapDispatchToProps = (dispatch) => {
  return {
    getFavs: () => dispatch(getFavs()),
  };
};

const mapStateToProps = (state) => {
  return;
};

export default connect(null, mapDispatchToProps)(Saved);
