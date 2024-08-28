import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardTable from '../component/DashboardTable';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        navigate('/');
    };

    return <DashboardTable onLogout={handleLogout} />;
};

export default Dashboard;
