import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import EditProfileModal from "./ModalEditProfil";
export default function HeaderUsers({ userProfile }) {
  const [showModal, setShowModal] = useState(false); // State untuk menampilkan modal
  const [newImage, setNewImage] = useState(null); // State untuk gambar profil baru

  // Fungsi untuk menampilkan modal saat pengguna mengklik "Edit Profil"
  const handleEditProfileClick = () => {
    setShowModal(true);
  };

  // Fungsi untuk menutup modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Fungsi untuk menangani pemilihan gambar profil baru
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setNewImage(file);
  };

  return (
    <div>
      <header className="d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-auto d-flex align-items-center">
            <div className="me-2">
              <img
                width="50"
                height="50"
                src={userProfile.imageProfile}
                alt="Profile Logo"
                className="rounded-circle"
              />
            </div>
            <div className="details ms-2 d-flex flex-column align-items-start">
              <span className="fw-bold">{`${userProfile.firstName} ${userProfile.lastName}`}</span>
              <span>{userProfile.status}</span>
            </div>
          </div>
          <div className="col d-flex align-items-center">
            <button
              type="button"
              className="btn dropdown-toggle dropdown-toggle-split border-0"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>

            <ul className="dropdown-menu">
              <li>
              <a href="#edit-profile" className="dropdown-item" onClick={handleEditProfileClick}>
              <div className="row d-flex align-items-center">
                <div className="col-sm-1">
                  <span className="bi bi-pencil-square"></span>
                </div>
                <div className="col-sm-2">Edit Profil</div>
              </div>
            </a>
              </li>
              <li>
                <NavLink to="/resetpassword" className="dropdown-item">
                  <div className="row d-flex align-items-center">
                    <div className="col-sm-1">
                      <span className="bi bi-key"></span>
                    </div>
                    <div className="col-sm-2">Reset Password</div>
                  </div>
                </NavLink>
              </li>
              <li>
                <a href="" className="dropdown-item">
                  <div className="row d-flex align-items-center">
                    <div className="col-sm-1">
                      <span className="bi bi-trash3-fill"></span>
                    </div>
                    <div className="col-sm-2">Hapus Akun</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="/logout" className="dropdown-item">
                  <div className="row d-flex align-items-center">
                    <div className="col-sm-1">
                      <span className="bi bi-box-arrow-right"></span>
                    </div>
                    <div className="col-sm-2">Keluar</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <EditProfileModal
        show={showModal}
        handleCloseModal={handleCloseModal}
        userProfile={userProfile}
        handleImageChange={handleImageChange}
      />
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}
