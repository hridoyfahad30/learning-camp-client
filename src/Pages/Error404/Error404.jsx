import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error404 = () => {
    
    const {error, status} = useRouteError();

    return (
        <div className='bg-gradient-to-b from-cyan-300 via-teal-400 to-cyan-600 min-h-screen'>
            <p>{status}</p>
            <p>{error.message}</p>
        </div>
    );
};

export default Error404;