import { useEffect, useState } from "react";
import authService from "../../services/AuthService";
import { useNavigate } from "react-router-dom";

export default function FormRegister() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    imageProfile: null,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/home");
    }
  }, []);

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await authService.registerUser(form);

      localStorage.setItem("token", response.data.token);

      alert(response.data.message);
      navigate("/home");
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
      <div className="item-row-around">
        <div className="form-input-custom">
          <label>Nama Depan</label>
          <input
            type="text"
            name="firstName"
            placeholder="Nama Depan"
            required
            value={form.firstName}
            onChange={changeHandler}
          />
        </div>

        <div className="form-input-custom">
          <label>Nama Belakang</label>
          <input
            type="text"
            name="lastName"
            placeholder="Nama Belakang"
            required
            value={form.lastName}
            onChange={changeHandler}
          />
        </div>
      </div>

      <div className="form-input-custom">
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          value={form.username}
          onChange={changeHandler}
        />
      </div>

      <div className="form-input-custom">
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={changeHandler}
        />
      </div>

      <div className="form-input-custom">
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={form.password}
          onChange={changeHandler}
        />
      </div>

      <div className="form-input-custom">
        <label>Pilih Gambar</label>
        <input type="file" name="imageProfile" onChange={changeHandler} />
      </div>

      <div className="center-item">
        <input
          type="submit"
          name="submit"
          value="Lanjutkan ke Chat"
          className="btn-form-submit"
        />
      </div>
    </form>
  );
}
