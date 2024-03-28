import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/AuthService";
import userService from "../../services/UserService";

export default function FormLogin({ socket }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const setData = async () => {
      if (socket) {
        try {
          const response = await userService.setSocketId(socket.id);
          console.log(response.data.message);
          navigate("/home");
        } catch (error) {
          console.log(error);
        }
      }
    };
    if (localStorage.getItem("token")) {
      setData();
    }
  }, [navigate]);

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await authService.loginUser(form);
      localStorage.setItem("token", response.data.token);
      navigate("/home");

      alert(response.data.message);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert(error);
      }
    }
  };

  const changeHandler = (event) => {
    const { name, value, files } = event.target;
    const newValue = files ? files[0] : value;
    setForm((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  return (
    <form
      action="#"
      method="POST"
      encType="multipart/form-data"
      autoComplete="off"
      onSubmit={submitHandler}
    >
      <div className="form-input-custom">
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Masukan Username"
          required
          onChange={changeHandler}
        />
      </div>

      <div className="form-input-custom">
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Masukan Password"
          required
          onChange={changeHandler}
        />

        <i className="fas fa-eye"></i>
      </div>
      <div className="center-item">
        <input
          type="submit"
          name="submit"
          value="Masuk"
          className="btn-form-submit"
        />
      </div>
    </form>
  );
}
