import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const {id, course_name, picture, description} = useLoaderData();
    return (
        <Card className='shadow border-0 mb-4'>
            <Card.Img className='w-100 img-fluid' style={{ height: '380px' }} variant="top" src={picture} />
            <Card.Body>
                <Card.Title className='fw-bold text-center'>{course_name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Link className='btn btn-outline-info w-100 mt-3' to={`/category`}>Get Premium Access</Link>
            </Card.Body>
        </Card>
    );
};

export default Details;