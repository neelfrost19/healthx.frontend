import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Login.css'
import {ROUTES} from "../Route/Route";
import {REACT_APP_API_HOST_URL as API_URL} from "../envs";
import SignupForm from "../component/SignupForm";

const Signup = () => {
    const navigate = useNavigate();

    const handleLogin = async (user) => {
        try {
            const response = await fetch(`${API_URL}${ROUTES.User}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                const data = await response.json();
                sessionStorage.setItem('token', data.token);
                navigate('/dashboard');
            } else {
                alert('Signup failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while signing up');
        }
    };
    const handleBack = async () => {
        navigate('/');
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1 className="login-title">HealthX</h1>
                <SignupForm onSubmit={handleLogin}/>
                <button className="signup-button" onClick={handleBack}>Back</button>
            </div>
        </div>
    );
};

export default Signup;
