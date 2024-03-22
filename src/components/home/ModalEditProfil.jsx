// EditProfileModal.js
import React from "react";
import { Modal } from "react-bootstrap";

export default function ModalEditProfil({ show, handleCloseModal, userProfile, handleImageChange }) {
  return (
    <div>
      <Modal show={show} onHide={handleCloseModal} centered>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Profil</h5>
            <button type="button" className="btn-close" onClick={handleCloseModal}></button>
          </div>
          <div className="modal-body">
            {/* Isi modal */}
            <div className="mb-3">
              <label htmlFor="profileImage" className="form-label">Preview Image</label>
              <img src={userProfile.profileImage} alt="Profile" className="img-fluid" />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" id="username" defaultValue={userProfile.username} />
            </div>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="fullName" defaultValue={`${userProfile.firstName} ${userProfile.lastName}`} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" defaultValue={userProfile.email} />
            </div>
            <div className="mb-3">
              <label htmlFor="newProfileImage" className="form-label">Choose Image</label>
              <input type="file" className="form-control" id="newProfileImage" onChange={handleImageChange} />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
