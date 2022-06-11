import { connect } from "react-redux";
import Explore from "./ExploreContainer";
import { getRooms } from "../../../redux/roomsSlice";

const mapDispatchToProps = (dispatch) => {
  return {
    getRooms: () => dispatch(getRooms()),
  };
};

const mapStateToProps = (state) => {
  return state.roomsReducer.explore;
};

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
