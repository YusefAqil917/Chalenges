// actions.js
import firebase from 'firebase/app';
import 'firebase/storage';

export const deleteImage = (imageName) => {
  return async (dispatch) => {
    try {
      const storageRef = firebase.storage().ref();
      await storageRef.child(imageName).delete();
      dispatch({ type: 'DELETE_IMAGE_SUCCESS' });
    } catch (error) {
      console.error('Error deleting image:', error);
      dispatch({ type: 'DELETE_IMAGE_FAILURE', payload: error.message });
    }
  };
};
