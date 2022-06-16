import { useEffect } from "react";
import SavedPresenter from "./SavedPresenter";

const SavedContainer = ({ getFavs }) => {
  useEffect(() => {
    getFavs();
  }, []);
  return <SavedPresenter />;
};

export default SavedContainer;
