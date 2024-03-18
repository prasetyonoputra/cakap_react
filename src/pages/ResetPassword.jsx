import React from 'react'
import Container from '../components/Container'
import Footer from '../components/Footer'
import SectionForm from '../components/form/SectionForm'
import { NavLink } from 'react-router-dom'

export default function ResetPassword() {
    return (
        <Container>
            <SectionForm>
                <header class="fs-5 d-flex justify-content-center align-items-center">
                    <div class="col-1 text-center">
                        <NavLink to="/home" className="back-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                            </svg>
                        </NavLink>
                    </div>
                    <div class="col-10 text-center">
                        <span className='fw-bold'>
                            Cakap Messenger
                        </span>
                    </div>
                    <div class="col-1"></div>
                </header>
                <hr />
                <form
                    action="#"
                    method="POST"
                    encType="multipart/form-data"
                    autoComplete="off"
                >
                    <div className="form-input-custom">
                        <label>Password Baru</label>
                        <input type="text" name="id_to_Add" placeholder="Masukan password baru" required />
                    </div>
                    <div className="form-input-custom">
                        <label>Konfirmasi Password</label>
                        <input type="text" name="id_to_Add" placeholder="Konfirmasi password baru" required />
                    </div>

                    <div className="center-item">
                        <input
                            type="submit"
                            name="submit"
                            value="Reset Password"
                            className="btn-form-submit"
                        />
                    </div>
                </form>

            </SectionForm>
            <Footer />
        </Container>

    )
}
