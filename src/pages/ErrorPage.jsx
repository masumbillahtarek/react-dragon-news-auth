import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h3>Oops !!!</h3> <br />
            <Link className='border-2 rounded-xl px-4 py-2 ' to="/">Home</Link>
        </div>
    );
};

export default ErrorPage;