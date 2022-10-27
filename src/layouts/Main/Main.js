import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../partials/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container className='my-5'>
                <Row>
                    <Col md="4">
                        <h1>This is left sidebar</h1>
                    </Col>
                    <Col md="8">
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;