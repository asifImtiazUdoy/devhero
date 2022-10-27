import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [category, setCategory] = useState([]);
    useEffect( () => {
        fetch('https://assignment10-backend-lake.vercel.app/categories')
        .then( res => res.json())
        .then(data => setCategory(data))
    },[]);
    return (
        <div className='text-center w-100'>
            <h2 className='fw-bold mb-5'>Total Category : <span className='text-info fw-bold'>{category.length}</span></h2>
            <Link className='btn btn-outline-info d-block w-75 mx-auto mb-3' to='/'>All Courses</Link>
            {
                category.map(cat => {
                    return (
                        <Link key={cat.id} className='btn btn-outline-info d-block w-75 mx-auto mb-3' to={`/category/${cat.id}`}>{cat.category_name}</Link>
                    )
                })
            }
        </div>
    );
};

export default Sidebar;