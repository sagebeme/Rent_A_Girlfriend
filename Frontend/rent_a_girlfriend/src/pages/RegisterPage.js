import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";
const RegisterPage = () => {
  const navigate = useNavigate();

  const onRectangle6Click = useCallback(() => {
    navigate("/boyfriend-profile");
  }, [navigate]);

  return (
    <div className="register-page">
      <div className="girlfriend-page1">
        <div className="girlfriend-page-inner" />
        <img className="girlfriend-page-child1" alt="" src="/group-1.svg" />
        <div className="sign-up-wrapper">
          <div className="sign-up">
            <div className="welcome">
              <b className="welcome-onboard">Welcome Onboard!</b>
              <div className="lets-help-you">Let’s help you get onboard.</div>
            </div>
            <div className="frame4">
              <div className="sign-up-details">
                <div className="fullname">
                  <div className="your-full-name">Your Full name</div>
                  <div className="full-name-wrapper">
                    <div className="full-name">Full name</div>
                  </div>
                </div>
                <div className="email">
                  <div className="your-email">Your Email</div>
                  <div className="email-child" />
                  <div className="email1">Email</div>
                </div>
                <div className="email">
                  <div className="your-email">Your Phone number</div>
                  <div className="email-child" />
                  <div className="phone">Phone</div>
                </div>
                <div className="email">
                  <div className="your-email">Enter your Password</div>
                  <div className="email-child" />
                  <div className="phone">Password</div>
                </div>
                <div className="email">
                  <div className="email-child" />
                  <div className="your-email">Confirm Your Password</div>
                  <div className="confirm-password">Confirm Password</div>
                </div>
                <div className="email">
                  <div className="email-child" />
                  <div className="your-email">Gender</div>
                  <div className="male-parent">
                    <div className="male">Male</div>
                    <img className="polygon-icon" alt="" src="/polygon-1.svg" />
                  </div>
                </div>
              </div>
              <div className="sign">
                <div className="sign-child" onClick={onRectangle6Click} />
                <div className="sign-up1">Sign Up</div>
                <div className="already-have-an-container">
                  <span className="already-have-an">{`Already have an account? `}</span>
                  <span className="sign-in">Sign in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar5">
          <div className="group-parent2">
            <img className="frame-child9" alt="" src="/group-19375.svg" />
            <div className="rent-a-gf-container4">
              <p className="rent-a4">{`Rent A `}</p>
              <p className="rent-a4">GF</p>
            </div>
          </div>
          <div className="nav-link5">
            <div className="features4">Features</div>
            <div className="safety4">Safety</div>
            <div className="login4">Login</div>
            <div className="premium4">Premium</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
