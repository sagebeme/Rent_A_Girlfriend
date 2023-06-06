import LoginContainer from "../components/LoginContainer";
import "./LoginPage.css";
const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-page-child" />
      <div className="mask-group-parent">
        <img className="mask-group-icon1" alt="" src="/mask-group1.svg" />
        <div className="navbar8">
          <div className="group-parent5">
            <img className="frame-child12" alt="" src="/group-19378.svg" />
            <div className="rent-a-gf-container7">
              <p className="rent-a7">{`Rent A `}</p>
              <p className="rent-a7">GF</p>
            </div>
          </div>
          <div className="nav-link8">
            <div className="features7">Features</div>
            <div className="safety7">Safety</div>
            <div className="login5">Login</div>
            <div className="premium7">Premium</div>
          </div>
        </div>
      </div>
      <LoginContainer />
    </div>
  );
};

export default LoginPage;
