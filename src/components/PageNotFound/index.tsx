import React from 'react';
import image from '../../assets/images/404.png';

const PageNotFound = () => {
    return (
        <div className="PageNotFound">
            <img src={image} alt="Page not found"/>
        </div>
    )
};

export default PageNotFound