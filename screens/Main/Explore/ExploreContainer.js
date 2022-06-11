import { useEffect } from "react";
import ExplorePresenter from "./ExplorePresenter";

const ExploreContainer = ({ getRooms, rooms, page }) => {
  useEffect(() => {
    getRooms();
  }, []);
  return <ExplorePresenter rooms={rooms} />;
};

export default ExploreContainer;
