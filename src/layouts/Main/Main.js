import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../partials/Header/Header';
import Sidebar from '../partials/Sidebar/Sidebar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container className='my-5'>
                <Row>
                    <Col md="3">
                        <Sidebar></Sidebar>
                    </Col>
                    <Col md="9">
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;