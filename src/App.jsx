import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles/Style.css';
import './styles/Form.css';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={LoginPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={RegisterPage} />
      </Routes>
    </Router>
  );
}
