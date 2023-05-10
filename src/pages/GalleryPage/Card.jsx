import React from 'react';

const Card = ({ image }) => {
  return (
    <div className="GalImagesCrd">
      <img src={image.imageUrl} alt={image.title} className="GalImagesMain" />
      <p className="GalImageTitle">{image.title}</p>
    </div>
  );
};

export default Card;