import { connect } from "react-redux";
import Map from "./MapContainer";

const mapStateTpProps = (state) => {
  return { rooms: state.roomsReducer.explore.rooms };
};

export default connect(mapStateTpProps)(Map);
