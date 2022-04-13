import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceid } = useParams();
    return (
        <div>
            <h2>Welcome To Service Detail: {serviceid}</h2>
            <div className='text-center'>
                <Link to={'/checkout'}>
                    <button className='btn btn-primary'>Proceed Check Out</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;