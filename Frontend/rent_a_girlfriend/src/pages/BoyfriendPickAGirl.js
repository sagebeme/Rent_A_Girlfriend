import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GirlToBeLiked from "../components/GirlToBeLiked";
import "./BoyfriendPickAGirl.css";
const BoyfriendPickAGirl = () => {
  const navigate = useNavigate();

  const onPageContainerClick = useCallback(() => {
    navigate("/boyfriend-dashboard");
  }, [navigate]);

  return (
    <div className="boyfriend-pick-a-girl">
      <div className="page" onClick={onPageContainerClick}>
        <div className="navbar">
          <div className="group-parent">
            <img className="frame-child" alt="" src="/group-1937.svg" />
            <div className="rent-a-gf-container">
              <p className="rent-a">{`Rent A `}</p>
              <p className="rent-a">GF</p>
            </div>
          </div>
          <div className="nav-link">
            <div className="features">Features</div>
            <div className="safety">Safety</div>
            <div className="login">Login</div>
            <div className="premium">Premium</div>
          </div>
        </div>
        <div className="pick-a-girl">
          <b className="girl-name">Girl Name</b>
          <div className="details">
            <div className="bio">
              <div className="bio1">Bio</div>
              <div className="lorem-ipsum-has">{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `}</div>
            </div>
            <div className="age">
              <div className="age1">Age</div>
              <div className="years">25 years</div>
            </div>
          </div>
        </div>
      </div>
      <GirlToBeLiked />
    </div>
  );
};

export default BoyfriendPickAGirl;
