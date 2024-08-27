import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardTable from '../component/DashboardTable';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return <DashboardTable onLogout={handleLogout} />;
};

export default Dashboard;
