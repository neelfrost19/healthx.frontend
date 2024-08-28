import React, { useState } from 'react';
import '../style/DeleteEmployeeModal.css';
import {REACT_APP_API_HOST_URL as API_URL} from "../envs";
import {ROUTES} from "../Route/Route";
import axios from "axios";

const DeleteEmployeeModal = ({ onClose, employeeId }) => {


    const deleteEmployee = async () => {
        try {
            console.log(`${API_URL}/${ROUTES.Staff}/${employeeId}`);
            const response = await axios.delete(`${API_URL}/${ROUTES.Staff}/${employeeId}`,{
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            });
            onClose();

        } catch (error) {
            console.log(error);
        }
    };


    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <h2>Delete Employee</h2>
                <div className="modal-buttons">
                    <button
                        className="modal-button close-button"
                        onClick={onClose}
                    >
                        Close
                    </button>
                    <button
                        className="modal-button delete-button"
                        onClick={deleteEmployee}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteEmployeeModal;
