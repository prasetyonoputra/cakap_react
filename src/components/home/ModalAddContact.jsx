import React from "react";
import { Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Container from "../Container";
import Footer from "../Footer";
import SectionForm from "../form/SectionForm";

export default function ModalAddContact({ show, setShow }) {
  const handleClose = () => setShow(false);

  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Container>
          <SectionForm>
            <header className="fs-5 d-flex justify-content-center align-items-center">
              <div className="col-1 text-center">
                <NavLink onClick={(e) => handleClose()} className="back-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-caret-left-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                  </svg>
                </NavLink>
              </div>
              <div className="col-10 text-center">
                <span className="fw-bold">Cakap Messenger</span>
              </div>
              <div className="col-1"></div>
            </header>
            <hr />
            <form
              action="#"
              method="POST"
              encType="multipart/form-data"
              autoComplete="off"
            >
              <div className="form-input-custom">
                <label>User ID</label>
                <input
                  type="text"
                  name="id_to_Add"
                  placeholder="Masukan User ID"
                  required
                />
              </div>

              <div className="center-item">
                <input
                  type="submit"
                  name="submit"
                  value="Tambah Kontak"
                  className="btn-form-submit"
                />
              </div>
            </form>
          </SectionForm>
          <Footer />
        </Container>
      </Modal>
    </div>
  );
}
