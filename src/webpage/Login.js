import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Login.css'
import LoginForm from '../component/LoginForm';
import {ROUTES} from "../Route/Route";
import {REACT_APP_API_HOST_URL as API_URL} from "../envs";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = async (user) => {
        try {
            console.log(API_URL);
            const response = await fetch(`${API_URL}${ROUTES.Login}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                const data = await response.json();
                sessionStorage.setItem('token', data.data.token);
                navigate('/dashboard');
                window.location.reload();
            } else {
                alert('Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while logging in');
        }
    };
    const handleSignUp = async () => {
        navigate('/signup');
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1 className="login-title">HealthX</h1>
                <LoginForm onSubmit={handleLogin}/>
                <button className="signup-button" onClick={handleSignUp}>Sign Up</button>
            </div>
        </div>
    );
};

export default Login;
