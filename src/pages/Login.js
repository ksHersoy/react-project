import React, { useState } from 'react';
import { Row, message, Col } from 'antd';
import LoginCard from '../components/LoginCard';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(false);


    const onFinish = (values) => {
        setLoading(!loading)
        console.log('Success:', values);
        message.success('Successs')
        sessionStorage.setItem("user", JSON.stringify(values))

        console.log(location);
        navigate(location.state?.return_url || '/', {
            replace: true
        })
    };
    const onFinishFailed = (values) => {
        console.log('Failed:', values);
        message.error('User name or password invalid')
    };

    return (
        <Row
            justify="center"
            align="middle"
            style={{
                minHeight: '100vh',
                padding: '0 16px',

            }}
        >
            <Col
                xs={24}
                sm={16}
                md={12}
                lg={8}
                xl={6}
                style={{
                    width: '100%',
                    maxWidth: '500px',
                }}
            >
                <LoginCard
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    loading={loading}
                />
            </Col>
        </Row>
    );
};

export default Login;
