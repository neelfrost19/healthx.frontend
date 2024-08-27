import React from 'react';
import '../style/Dashboard.css';
import {RiHome4Line } from '@remixicon/react'


const Navbar = ({ onLogout }) => {
    return (
        <aside className="sidebar">
                <div className="sidebar-title">
                    <h1>HEALTHX</h1>
                </div>
                <nav>
                    <ul>
                        <li className="active"><div><RiHome4Line/></div> <div>Dashboard</div> </li>
                        <li>
                            <button onClick={onLogout}>Logout</button>
                        </li>
                    </ul>
                </nav>
            </aside>
        // <div>
        //     <h2>Dashboard</h2>
        //     <p>Welcome to the dashboard!</p>
        //     <button onClick={onLogout}>Logout</button>
        // </div>
    );
};

export default Navbar;
