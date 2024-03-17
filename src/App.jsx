import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/Style.css";
import "./styles/Form.css";
import "./styles/Chat.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";
import Logout from "./components/Logout";

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
      </Routes>
    </Router>
  );
}
