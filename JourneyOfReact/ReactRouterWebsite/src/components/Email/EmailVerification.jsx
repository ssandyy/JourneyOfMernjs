/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EmailVerification = () => {
    const [message, setMessage] = useState('Verifying your email...');
    const { token } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                await axios.get(`http://localhost:8080/api/auth/verify-email?token=${token}`);
                setMessage('Email verified successfully! Redirecting...');
                setTimeout(() => navigate('/login'), 3000);
            } catch (error) {
                setMessage('Verification failed. Link may be expired or invalid.');
            }
        };
        verifyEmail();
    }, [token, navigate]);

    return (
        <div className="verification-container">
            <h2>{message}</h2>
        </div>
    );
};

export default EmailVerification;