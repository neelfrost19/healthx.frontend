import React from 'react';
import '../style/AddEmployeeModal.css';

const AddEmployeeModal = ({ onClose }) => {
    // Handle the click outside the modal to close it
    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <h2>Add New Employee</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="employeeName">Name</label>
                        <input type="text" id="employeeName" name="employeeName" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="department">Department</label>
                        <input type="text" id="department" name="department" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="role">Role</label>
                        <input type="text" id="role" name="role" required />
                    </div>
                    <button type="submit" className="submit-button">Add Employee</button>
                </form>
            </div>
        </div>
    );
};

export default AddEmployeeModal;