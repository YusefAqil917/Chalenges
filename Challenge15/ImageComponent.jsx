// ImageComponent.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteImage } from './actions';

const ImageComponent = ({ imageName }) => {
  const dispatch = useDispatch();

  const handleDeleteImage = () => {
    dispatch(deleteImage(imageName));
  };

  return (
    <div>
      <img src={`url_to_your_image/${imageName}`} alt="Your Image" />
      <button onClick={handleDeleteImage}>Delete Image</button>
    </div>
  );
};

export default ImageComponent;
