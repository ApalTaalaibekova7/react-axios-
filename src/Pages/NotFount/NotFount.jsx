import React from 'react';
import { Link } from 'react-router-dom';

const NotFount = () => {
    return (
        <div>
            <h1>404 page not fount</h1>
            <Link to={'/'}>На главную!</Link>
        </div>
    );
};

export default NotFount;