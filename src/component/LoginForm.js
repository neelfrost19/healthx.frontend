import React, { useState } from 'react';
import '../style/Login.css';

const LoginForm = ({ onSubmit }) => {
    const [user, setUser] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await onSubmit(user);
        console.log(result);
        if (result === 'PASSWORD_REQUIRED') {
            setShowPassword(true);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label className="login-label">Email</label>
            <input
                type="email"
                name="email"
                placeholder="Email ID"
                className="login-input"
                value={user.email}
                onChange={handleChange}
                required
            />
            {showPassword && (
                <>
                    <label className="login-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="login-input"
                        value={user.password}
                        onChange={handleChange}
                        required
                    />
                </>
            )}
            <button type="submit" className="login-button">
                {showPassword ? 'Log In' : 'Next'}
            </button>
        </form>
    );
};

export default LoginForm;
