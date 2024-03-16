import Configuration from "../Configuration";

export default function Login() {
  console.log(Configuration.API_URL);

  return (
    <div className="container">
      <section className="section-form">
        <header className="header">LOGIN</header>

        <div className="center-item">
          <img src="./assets/images/chat.png" alt="logo" width="100px" />
        </div>

        <form
          action="#"
          method="POST"
          encType="multipart/form-data"
          autoComplete="off"
        >
          <div className="form-input">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Masukan email"
              required
            />
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

        <div className="center-item link-register">
          Belum punya akun? <a href="/register">&nbsp;Daftar</a>
        </div>
      </section>

      <footer>
        <p>&#169; 2024 Cakap Messenger</p>
      </footer>
    </div>
  );
}
