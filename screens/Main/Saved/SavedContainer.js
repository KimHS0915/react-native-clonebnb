import { useEffect } from "react";
import SavedPresenter from "./SavedPresenter";

const SavedContainer = ({ getFavs, rooms }) => {
  useEffect(() => {
    getFavs();
  }, []);
  return <SavedPresenter rooms={rooms} />;
};

export default SavedContainer;
