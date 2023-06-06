import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import BoyfriendPickAGirl from "./pages/BoyfriendPickAGirl";
import BoyfriendProfile from "./pages/BoyfriendProfile";
import WelcomePage from "./pages/WelcomePage";
import GirlfriendPage from "./pages/GirlfriendPage";
import GirlfriendProfileUpdate from "./pages/GirlfriendProfileUpdate";
import RegisterPage from "./pages/RegisterPage";
import BoyfriendDashboard from "./pages/BoyfriendDashboard";
import GirlfriendDashboard from "./pages/GirlfriendDashboard";
import LoginPage from "./pages/LoginPage";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/boyfriend-profile":
        title = "";
        metaDescription = "";
        break;
      case "/welcome-page":
        title = "";
        metaDescription = "";
        break;
      case "/girlfriend-page":
        title = "";
        metaDescription = "";
        break;
      case "/girlfriend-profile-update":
        title = "";
        metaDescription = "";
        break;
      case "/register-page":
        title = "";
        metaDescription = "";
        break;
      case "/boyfriend-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/girlfriend-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<BoyfriendPickAGirl />} />
      <Route path="/boyfriend-profile" element={<BoyfriendProfile />} />
      <Route path="/welcome-page" element={<WelcomePage />} />
      <Route path="/girlfriend-page" element={<GirlfriendPage />} />
      <Route
        path="/girlfriend-profile-update"
        element={<GirlfriendProfileUpdate />}
      />
      <Route path="/register-page" element={<RegisterPage />} />
      <Route path="/boyfriend-dashboard" element={<BoyfriendDashboard />} />
      <Route path="/girlfriend-dashboard" element={<GirlfriendDashboard />} />
      <Route path="/login-page" element={<LoginPage />} />
    </Routes>
  );
}
export default App;
