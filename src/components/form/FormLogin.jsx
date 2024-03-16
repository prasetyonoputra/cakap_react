export default function FormLogin() {
  return (
    <form
      action="#"
      method="POST"
      encType="multipart/form-data"
      autoComplete="off"
    >
      <div className="form-input">
        <label>Email</label>
        <input type="text" name="email" placeholder="Masukan email" required />
      </div>

      <div className="form-input">
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
