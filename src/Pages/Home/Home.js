import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Home = () => {
    const courses = useLoaderData();

    return (
        <Container className='my-5'>
            <Row>
                {
                    courses.map( course => <Course key={course.id} course={course}></Course>)
                }
            </Row>
        </Container>
    );
};

export default Home;