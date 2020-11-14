import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import GifGridItem from '../GifGridItem';
import useFetchGifs from '../../hooks/useFetchGifs';
import './GifGrid.scss'

function GifGrid ({ category }) {

  const { data:images, loading } = useFetchGifs(category);

  return (
    <Fragment>
      <h3 className='animate__animated animate__fadeIn'> { category }</h3>
      {loading ? <p className='animate__animated animate__flash'>Cargando...</p> :
        <div className='GifGrid'>
        {images && 
          images.map( img =>( 
            <GifGridItem
              key={img.id}
              { ...img}
              />
          ))
        }
      </div>
      }
    </Fragment>
  );
}

GifGrid.propTypes = {
  category:PropTypes.string.isRequired 
}

export default GifGrid;
