import React, { useState } from 'react';
import '../style/Login.css'

const SignupForm = ({ onSubmit }) => {
    const [user, setUser] = useState({ text: '', email: '', password: '' });

    const handleChange = (e) => {
        console.log(e.target);
        setUser({
            ...user,
            [e.target.type]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(user);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label className="login-label">Username</label>
            <input type="text" placeholder="Username" className="login-input" value={user.text}
                   onChange={handleChange}/>
            <label className="login-label">Email</label>
            <input type="email" placeholder="Email ID" className="login-input" value={user.email}
                   onChange={handleChange}/>
            <label className="login-label">Password</label>
            <input type="password" placeholder="Password" className="login-input" value={user.password}
                   onChange={handleChange}/>
            <button type="submit" className="login-button">Sign Up</button>
        </form>
    );
};

export default SignupForm;
