import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Container from "../Container";
import Footer from "../Footer";
import SectionForm from "../form/SectionForm";
import contactService from "../../services/ContactService";

export default function ModalAddContact({ show, setShow }) {
  const handleClose = () => setShow(false);
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await contactService.addContact({ username: username });
      console.log(response);
    } catch (error) {
      if (error.response.data) {
        alert(error.response.data.message);
      } else {
        alert(error);
      }
    }
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Container>
          <SectionForm>
            <header className="fs-5 d-flex justify-content-center align-items-center">
              <div className="col-1 text-center">
                <NavLink onClick={(e) => handleClose()} className="back-icon">
                  <span className="bi bi-caret-left-fill"></span>
                </NavLink>
              </div>
              <div className="col-10 text-center">
                <span className="fw-bold">Cakap Messenger</span>
              </div>
              <div className="col-1"></div>
            </header>
            <hr />
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className="form-input-custom">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Masukan Username"
                  required
                  onChange={(e) => setUsername(e.target.value)}
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
