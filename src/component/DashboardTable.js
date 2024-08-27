import React, {useState} from 'react';
import '../style/Dashboard.css';
import Navbar from "./Navbar";
import {RiDeleteBin6Line, RiEdit2Line, RiUserAddLine} from '@remixicon/react'
import AddEmployeeModal from "./AddEmployeeModal";

const employees = [
    {
        id: '#012345678901',
        name: 'Alice Cooper',
        department: 'Medical',
        email: 'Alice@gmail.com',
        phoneNumber: '+91 1234567890',
        role: 'Admin',
    },
    {
        id: '#012345678901',
        name: 'Bob Smith',
        department: 'Engineer',
        email: 'Alice@gmail.com',
        phoneNumber: '+91 1234567890',
        role: 'Manager',
    },
    {
        id: '#012345678901',
        name: 'Carol White',
        department: 'Designer',
        email: 'Alice@gmail.com',
        phoneNumber: '+91 1234567890',
        role: 'Staff',
    },
    {
        id: '#012345678901',
        name: 'David Brown',
        department: 'Medical',
        email: 'Alice@gmail.com',
        phoneNumber: '+91 1234567890',
        role: 'Admin',
    },
    {
        id: '#012345678901',
        name: 'Micheal James',
        department: 'Designer',
        email: 'Alice@gmail.com',
        phoneNumber: '+91 1234567890',
        role: 'Manager',
    },
];

const DashboardContent = ({ onLogout }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filter, setFilter] = useState('Employee'); // Default filter value

    const handleAddEmployee = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <div className="dashboard-container">
            <Navbar onLogout={onLogout}/>
            <div className="main-content">
                <div className="header">
                    <input
                        type="text"
                        placeholder={`Search by ${filter}`}
                        className="search-bar"
                    />
                    <select
                        className="filter-dropdown"
                        value={filter}
                        onChange={handleFilterChange}
                    >
                        <option value="Employee">Employee</option>
                        <option value="Role">Role</option>
                        <option value="Department">Department</option>
                    </select>
                </div>
                <div className="table-box">
                    <div className="table-header">
                        <h2>Employee Table</h2>
                        <button className="add-employee-button" onClick={handleAddEmployee}>
                            <div><RiUserAddLine/></div>
                            <div>Add Employee</div>
                        </button>
                    </div>
                    <table>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>NAME</th>
                            <th>Department</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {employees.map((employee, index) => (
                            <tr key={index}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.department}</td>
                                <td>{employee.email}</td>
                                <td>{employee.phoneNumber}</td>
                                <td>{employee.role}</td>
                                <td>
                                    <RiEdit2Line/>
                                    <RiDeleteBin6Line/>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                {isModalOpen && <AddEmployeeModal onClose={closeModal} />}
            </div>
        </div>
    );
};

export default DashboardContent;
