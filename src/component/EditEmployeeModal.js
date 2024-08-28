import React, { useState } from 'react';
import '../style/AddEmployeeModal.css';
import {REACT_APP_API_HOST_URL as API_URL} from "../envs";
import {ROUTES} from "../Route/Route";
import axios from "axios";

const EditEmployeeModal = ({ onClose }) => {
    const [employeeData, setEmployeeData] = useState({
        firstName: '',
        lastName: '',
        department: '',
        email: '',
        countryCode: '',
        phone: '',
        gender: ''
    });

    const genders = [
        { name: "Male" },
        { name: "Female" },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmployeeData({
            ...employeeData,
            [name]: value
        });
    };

    const editEmployee = async () => {
        try {
            console.log(`${API_URL}${ROUTES.Staff}`);
            const response = await axios.patch(`${API_URL}/${ROUTES.Staff}`, employeeData,{
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            });

        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Employee Data:', employeeData);
        editEmployee().then(()=>{});
        onClose();
        setEmployeeData({
            firstName: '',
            lastName: '',
            department: '',
            email: '',
            countryCode: '',
            phone: '',
        });
    };

    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <h2>Edit Employee</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={employeeData.firstName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={employeeData.lastName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="department">Department</label>
                        <input
                            type="text"
                            id="department"
                            name="department"
                            value={employeeData.department}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={employeeData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="countryCode">Country Code</label>
                            <input
                                type="number"
                                id="countryCode"
                                name="countryCode"
                                value={employeeData.countryCode}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="number"
                                id="phone"
                                name="phone"
                                value={employeeData.phone}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <select
                            id="gender"
                            name="gender"
                            value={employeeData.gender}
                            onChange={handleInputChange}
                            className="select-role"
                            required
                        >
                            <option value="" disabled>Select Gender</option>
                            {genders.map((gender, index) => (
                                <option key={index} value={gender.name}>
                                    {gender.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="submit-button">Edit Employee</button>
                </form>
            </div>
        </div>
    );
};

export default EditEmployeeModal;
