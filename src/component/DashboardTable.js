import React, {useState, useEffect} from 'react';
import '../style/Dashboard.css';
import Navbar from "./Navbar";
import {RiDeleteBin6Line, RiEdit2Line, RiUserAddLine} from '@remixicon/react'
import AddEmployeeModal from "./AddEmployeeModal";
import {REACT_APP_API_HOST_URL as API_URL} from "../envs";
import {ROUTES} from "../Route/Route";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const DashboardContent = ({ onLogout }) => {

    const searchOptions = [
        { name: "First Name", value: "firstName" },
        { name: "Last Name", value: "lastName" },
        { name: "Department", value: "department" },
        { name: "Email", value: "email" },
        { name: "Phone", value: "phone" },
    ];

    const navigate = useNavigate();

    const [staffData, setStaffData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filter, setFilter] = useState(searchOptions[0].value);
    const [search, setSearch] = useState('');

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSearchKeyDown = async (event) => {
        if (event.key === 'Enter') {
            try {
                const response = await axios.get(`${API_URL}/${ROUTES.Staff}?search=${search}&searchType=${filter}`, {
                    headers: {
                        'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                        'Content-Type': 'application/json'
                    }
                });
                setStaffData(response.data.data);
            } catch (error) {
                console.error('Error during search:', error);
            }
        }
    };

    const fetchData = async () => {
        try {
            const response = await axios.get(`${API_URL}/${ROUTES.Staff}`, {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            });
            setStaffData(response.data.data);

        } catch (error) {
            console.log(error);
            sessionStorage.removeItem('token');
            navigate('/');
            window.location.reload();
            //alert('An error occurred while fetching data');
        }
    };

    useEffect(() => {
        console.log(staffData);
        fetchData().then((resolve, reject) => {
        });
    }, [setStaffData, isModalOpen]);

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
                        placeholder={`Search by ${filter.charAt(0).toUpperCase()}${filter.slice(1)}`}
                        className="search-bar"
                        value={search}
                        onChange={handleSearchChange}
                        onKeyDown={handleSearchKeyDown}
                    />
                    <select
                        className="filter-dropdown"
                        value={filter}
                        onChange={handleFilterChange}
                    >
                        {searchOptions.map((searchOption, index) => (
                            <option key={index} value={searchOption.value}>
                                {searchOption.name}
                            </option>
                        ))}
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
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Department</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                        <tbody>
                        {staffData.length ? staffData.map((employee, index) => (
                            <tr key={index}>
                                <td>{employee._id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.department}</td>
                                <td>{employee.email}</td>
                                <td>{`+ ${employee.countryCode} ${employee.phone}`}</td>
                                <td>{employee.role}</td>
                                <td>
                                    <RiEdit2Line/>
                                    <RiDeleteBin6Line/>
                                </td>
                            </tr>
                        )) : (<div></div>)}
                        </tbody>
                    </table>
                </div>
                {isModalOpen && <AddEmployeeModal onClose={closeModal} />}
            </div>
        </div>
    );
};

export default DashboardContent;
