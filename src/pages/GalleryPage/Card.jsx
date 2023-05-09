import React from 'react';

const Card = ({ image }) => {
  return (
    <div className="GalImagesCrd">
      <img src={image.url} alt={image.title} className="GalImagesMain" />
      <p className="GalImageTitle">{image.title}</p>
    </div>
  );
};

export default Card;