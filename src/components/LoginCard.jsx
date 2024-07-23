import React from 'react';
import { Card, Divider } from 'antd';
import LoginForm from './LoginForm';



const LoginCard = ({ onFinish, onFinishFailed, loading }) => {
    return (
        <>
            <Card
                style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    backgroundColor: '#ffffff',
                    borderRadius: '1rem',
                    padding: '4px',
                    zIndex: 10,
                    boxShadow: '0 2px 16px -3px rgba(6,81,237,0.3)'
                }}
                size="small"
                cover={
                    <img
                        alt="login"
                        src="https://readymadeui.com/login-image.webp"
                    />
                }
            >
                <Divider />
                <LoginForm onFinish={onFinish} onFinishFailed={onFinishFailed} loading={loading} />
            </Card>
        </>
    );
};

export default LoginCard;