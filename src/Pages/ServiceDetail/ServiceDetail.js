import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceid } = useParams();
    return (
        <div>
            <h2>Welcome To Service Detail: {serviceid}</h2>
        </div>
    );
};

export default ServiceDetail;