import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import './styles/Style.css';
import './styles/Form.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/" Component={Login} />
      </Routes>
    </Router>
  );
}
