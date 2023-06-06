import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DescWithPic1 from "../components/DescWithPic1";
import "./GirlfriendPage.css";
const GirlfriendPage = () => {
  const navigate = useNavigate();

  const onGirlfriendPageContainerClick = useCallback(() => {
    navigate("/girlfriend-dashboard");
  }, [navigate]);

  return (
    <div className="girlfriend-page" onClick={onGirlfriendPageContainerClick}>
      <div className="girlfriend-page-child" />
      <div className="girlfriend-page-item" />
      <DescWithPic1 />
      <div className="bio2">
        <div className="bio3">Bio</div>
        <div className="bio-desc">{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `}</div>
      </div>
      <div className="navbar3">
        <div className="frame-div">
          <img className="frame-child7" alt="" src="/group-19373.svg" />
          <div className="rent-a-gf-container2">
            <p className="rent-a2">{`Rent A `}</p>
            <p className="rent-a2">GF</p>
          </div>
        </div>
        <div className="nav-link3">
          <div className="features2">Features</div>
          <div className="safety2">Safety</div>
          <div className="login2">Login</div>
          <div className="premium2">Premium</div>
        </div>
      </div>
    </div>
  );
};

export default GirlfriendPage;
