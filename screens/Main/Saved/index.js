import { connect } from "react-redux";
import { getFavs } from "../../../redux/usersSlice";
import Saved from "./SavedContainer";

const mapDispatchToProps = (dispatch) => {
  return {
    getFavs: () => dispatch(getFavs()),
  };
};

const mapStateToProps = (state) => {
  return { rooms: state.roomsReducer.favs };
};

export default connect(mapStateToProps, mapDispatchToProps)(Saved);
