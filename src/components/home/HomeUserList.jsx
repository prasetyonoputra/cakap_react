import React from 'react'

export default function HomeUserList() {
    return (
        <div class='d-flex justify-content-center align-items-center'>
            <div class="row">
                <div class="col-auto d-flex align-items-center justify-content-center">
                    <div className='me-2'>
                        <img width="50" height="50" src="./assets/images/default-logo.png" alt="Profile Logo" class="rounded-circle" />
                    </div>
                    <div class="user-list ms-2 d-flex flex-column align-items-start">
                        <span class="fw-bold">Nama User</span>
                        <span>Status</span>
                    </div>
                </div>
                <div class="col d-flex align-items-center justify-content-center">
                    <div className='text-black-50'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
