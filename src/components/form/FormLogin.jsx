import { useNavigate } from "react-router-dom";

export default function FormLogin() {

  const navigate = useNavigate();

  const submitHandler = () => {
    navigate("/home");
  }

  return (
    <form
      action="#"
      method="POST"
      encType="multipart/form-data"
      autoComplete="off"
      onSubmit={submitHandler}
    >
      <div className="form-input-custom">
        <label>Email</label>
        <input type="email" name="email" placeholder="Masukan email" required />
      </div>

      <div className="form-input-custom">
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Masukan password"
          required
        />

        <i className="fas fa-eye"></i>
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
