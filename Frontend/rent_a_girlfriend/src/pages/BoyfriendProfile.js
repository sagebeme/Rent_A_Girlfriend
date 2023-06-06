import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DescWithPic from "../components/DescWithPic";
import RentAContainer from "../components/RentAContainer";
import "./BoyfriendProfile.css";
const BoyfriendProfile = () => {
  const navigate = useNavigate();

  const onBoyfriendProfileContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className="boyfriend-profile"
      onClick={onBoyfriendProfileContainerClick}
    >
      <div className="page1">
        <div className="page-child" />
        <div className="page-item" />
        <DescWithPic />
        <div className="navbar1">
          <RentAContainer />
          <div className="nav-link1" />
        </div>
      </div>
    </div>
  );
};

export default BoyfriendProfile;
