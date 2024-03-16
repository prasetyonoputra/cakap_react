import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles/Style.css';
import './styles/Form.css';
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" Component={LoginPage} />
        <Route path="/" Component={LoginPage} />
      </Routes>
    </Router>
  );
}
