export default function FormRegister() {
  return (
    <form
      action="#"
      method="POST"
      encType="multipart/form-data"
      autoComplete="off"
    >
      <div className="item-column">
        <div className="form-input">
          <label>Nama Depan</label>
          <input
            type="text"
            name="nama_depan"
            placeholder="Masukan Nama Depan"
            required
          />
        </div>

        <div className="form-input">
          <label>Nama Belakang</label>
          <input
            type="text"
            name="nama_belakang"
            placeholder="Masukan Nama Belakang"
            required
          />
        </div>
      </div>

      <div className="form-input">
        <label>Email</label>
        <input type="email" name="email" placeholder="Masukan email" required />
      </div>

      <div className="form-input">
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Masukan password"
          required
        />
      </div>

      <div className="form-input">
        <label>Pilih Gambar</label>
        <input
          type="file"
          name="foto_profile"
        />
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
