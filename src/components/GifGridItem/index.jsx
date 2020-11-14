import React from 'react';
import './GifGridItem.scss';

const GifGridItem = ({ title, id, url }) => {
    
    return (
        <div className='GifGridItem animate__animated animate__fadeIn'>
            <img src={ url } alt={ title } />
            <p> {title} </p>
        </div>
    )
}

export default GifGridItem
