import React from 'react';
import LazyLoad from 'react-lazy-load';

const ImageWrapper = ({ image, description }) => {
  return (
    <div className="col-md-4 col-xs-6">
      <LazyLoad>
        <div className="thumbnail">
          <img src={image} alt={description}></img>
        </div>
      </LazyLoad>
    </div>
  )
}

export default ImageWrapper;