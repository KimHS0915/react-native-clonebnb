import { connect } from "react-redux";
import Explore from "./ExploreContainer";
import { getRooms, increasePage } from "../../../redux/roomsSlice";

const mapDispatchToProps = (dispatch) => {
  return {
    getRooms: (page) => dispatch(getRooms(page)),
    increasePage: () => dispatch(increasePage()),
  };
};

const mapStateToProps = (state) => {
  return state.roomsReducer.explore;
};

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
