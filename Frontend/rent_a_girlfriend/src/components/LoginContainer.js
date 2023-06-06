import "./LoginContainer.css";
const LoginContainer = () => {
  return (
    <div className="login-form">
      <div className="login-form-child" />
      <div className="sign-in1">Sign In</div>
      <b className="welcome-back">Welcome Back!</b>
      <div className="lets-help-you1">Let’s help you get onboard.</div>
      <div className="login-form-item" />
      <div className="login-form-inner" />
      <div className="forgot-your-password">Forgot your password?</div>
      <div className="dont-have-an-container">
        <span className="dont-have-an">{`Don’t have an account? `}</span>
        <span className="sign-up2">Sign Up</span>
      </div>
      <div className="enter-your-password1">Enter your Password</div>
      <div className="your-email1">Your Email</div>
    </div>
  );
};

export default LoginContainer;
