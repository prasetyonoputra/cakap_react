import React from 'react'
import Container from '../components/Container'
import Footer from '../components/Footer'
import SectionForm from '../components/form/SectionForm'
import { NavLink } from 'react-router-dom'

export default function AddGroups() {
    return (
        <Container>
            <SectionForm>
                <header class="fs-5 d-flex justify-content-center align-items-center">
                    <div class="col-1 text-center">
                        <NavLink to="/group" className="back-icon">
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
                        <label>Nama Grup</label>
                        <input type="text" name="nameGroup" placeholder="Masukan nama grup" required />
                    </div>
                    <div class="field image">
                        <label>Pilih Gambar</label>
                        <input type="file" name="image"/>
                    </div>

                    <div className="center-item">
                        <input
                            type="submit"
                            name="submit"
                            value="Buat Grup"
                            className="btn-form-submit"
                        />
                    </div>
                </form>

            </SectionForm>
            <Footer />
        </Container>

    )
}
