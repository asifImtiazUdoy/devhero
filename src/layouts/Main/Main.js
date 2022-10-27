import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../partials/Header/Header';
import Sidebar from '../partials/Sidebar/Sidebar';

const Main = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div>
            <Header></Header>
            <Container className='my-5'>
                <Row>
                    <Col md="4">
                        <Sidebar></Sidebar>
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