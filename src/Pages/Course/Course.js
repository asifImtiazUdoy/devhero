import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    const {course_name, picture, description} = course;
    return (
        <Col md="4">
            <Card className='shadow border-0 mb-4'>
                <Card.Img className='w-100 img-fluid' style={{ height: '170px' }} variant="top" src={picture} />
                <Card.Body>
                    <Card.Title className='fw-bold text-center'>{course_name}</Card.Title>
                    <Card.Text style={{ height: '150px' }}>
                        {description.slice(0, 200)}...
                    </Card.Text>
                    <Link className='btn btn-outline-info w-100 mt-3' to='#'>Enroll to this Course</Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;