import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomeUserList({ listContact }) {
  const navigate = useNavigate();
  const handleClick = (username) => {
    navigate(`/chat?username=${username}`);
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ cursor: "pointer" }}
    >
      <div className="row">
        {listContact.map((contact) => {
          return (
            <React.Fragment key={contact.username}>
              <div className="col-auto d-flex align-items-center justify-content-center" onClick={() => handleClick(contact.username)}>
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
                  <span className="fw-bold">{`${contact.firstName} ${contact.lastName}`}</span>
                  <span>Tidak ada pesan</span>
                </div>
              </div>
              <div className="col d-flex align-items-center justify-content-center">
                <div className="text-black-50">
                  <span className="bi bi-circle-fill"></span>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
