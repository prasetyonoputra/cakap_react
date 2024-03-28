import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Logout from "./components/Logout";
import AddGroups from "./pages/AddGroups";
import ChatPage from "./pages/ChatPage";
import Groups from "./pages/Groups";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ResetPassword from "./pages/ResetPassword";
import "./styles/Chat.css";
import "./styles/Form.css";
import "./styles/Style.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={LoginPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={RegisterPage} />
        <Route path="/home" Component={HomePage} />
        <Route path="/chat" Component={ChatPage} />
        <Route path="/logout" Component={Logout} />
        <Route path="/groups" Component={Groups} />
        <Route path="/addgroups" Component={AddGroups} />
        <Route path="/resetpassword" Component={ResetPassword} />
      </Routes>
    </Router>
  );
}
