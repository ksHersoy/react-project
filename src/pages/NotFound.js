import React from 'react';
import { Row, Col, Result } from 'antd';


const NotFound = () => {
  return (

    <>
      <Row
        justify="center"
        align="middle"
        style={{
          minHeight: '100vh',
          padding: '0 16px',
          backgroundColor: '#f0f4ff',
          backgroundImage: 'linear-gradient(to right, #f0f4ff, #e6f0ff)',
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

          <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
          />

        </Col>

      </Row>
    </>

  )
}

export default NotFound;
