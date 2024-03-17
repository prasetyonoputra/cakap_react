import React from "react";

export default function HomeUserList() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="col-auto d-flex align-items-center justify-content-center">
          <div className="me-2">
            <img
              width="50"
              height="50"
              src="./assets/images/default-logo.png"
              alt="Profile Logo"
              className="rounded-circle"
            />
          </div>
          <div className="user-list ms-2 d-flex flex-column align-items-start">
            <span className="fw-bold">Nama User</span>
            <span>Tidak ada pesan</span>
          </div>
        </div>
        <div className="col d-flex align-items-center justify-content-center">
          <div className="text-black-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-circle-fill"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="8" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
