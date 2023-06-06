import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomePage.css";
const WelcomePage = () => {
  const navigate = useNavigate();

  const onLoginTextClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <div className="welcome-page">
      <div className="rectangle-parent">
        <div className="frame-item" />
        <img className="frame-inner" alt="" src="/group-1943.svg" />
        <div className="ellipse-div" />
        <div className="meet-the-chosen-container">
          <p className="meet-the">Meet the</p>
          <p className="chosen-one">
            <b>Chosen one</b>
          </p>
        </div>
        <div className="photo-beautiful-afro-american-parent">
          <img
            className="photo-beautiful-afro-american-icon"
            alt=""
            src="/photobeautifulafroamericanwomanconcentatedintosmartphonedeviceenjoyschattingonlinedownloadsmusicplaylistlisteningheadphoneshascurlydarkhairwearscasualoutfit-2@2x.png"
          />
          <img
            className="photo-beautiful-afro-american-icon1"
            alt=""
            src="/photobeautifulafroamericanwomanconcentatedintosmartphonedeviceenjoyschattingonlinedownloadsmusicplaylistlisteningheadphoneshascurlydarkhairwearscasualoutfit-1@2x.png"
          />
        </div>
        <div className="frame-child1" />
        <div className="get-started-wrapper">
          <div className="get-started">Get started</div>
        </div>
        <div className="boyfriend-card">
          <img className="subtract-icon" alt="" src="/subtract.svg" />
          <img className="boyfriend-card-child" alt="" src="/ellipse-17.svg" />
          <div className="boyfriend-card-item" />
          <div className="near-21-km-container">
            <span>
              <span>Near</span>
              <span className="span">{` `}</span>
            </span>
            <span className="span1">
              <span className="span2">2.1</span>
              <span>{` `}</span>
            </span>
            <span>
              <span>KM</span>
            </span>
          </div>
          <div className="ann-kanana">
            <span>{`Ann `}</span>
            <span className="kanana">KANana</span>
          </div>
          <div className="kilimani">Kilimani</div>
          <img
            className="boyfriend-card-inner"
            alt=""
            src="/ellipse-8@2x.png"
          />
          <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
          <div className="say-hello-wrapper">
            <b className="say-hello">Say Hello</b>
          </div>
        </div>
        <img className="group-icon" alt="" src="/group-5.svg" />
        <img className="frame-child2" alt="" src="/group-1946.svg" />
        <img className="frame-child3" alt="" src="/group-1944@2x.png" />
        <div className="ellipse-parent">
          <div className="frame-child4" />
          <img className="rectangle-icon" alt="" src="/rectangle-12.svg" />
          <div className="hi">Hi</div>
        </div>
        <img className="frame-child5" alt="" src="/group-15.svg" />
        <div className="navbar2">
          <div className="group-container">
            <img className="frame-child6" alt="" src="/group-19372.svg" />
            <div className="rent-a-gf-container1">
              <p className="meet-the">{`Rent A `}</p>
              <p className="meet-the">GF</p>
            </div>
          </div>
          <div className="nav-link2">
            <div className="features1">Features</div>
            <div className="safety1">Safety</div>
            <div className="login1" onClick={onLoginTextClick}>
              Login
            </div>
            <div className="premium1">Premium</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
