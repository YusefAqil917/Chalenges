import firebase from 'firebase/app';
import 'firebase/database';

export const updateData = (id, newData) => {
  return async (dispatch) => {
    try {
      await firebase.database().ref(`your_database_path/${id}`).update(newData);
      dispatch({ type: 'UPDATE_DATA_SUCCESS' });
    } catch (error) {
      console.error('Error updating data:', error);
      dispatch({ type: 'UPDATE_DATA_FAILURE', payload: error.message });
    }
  };
};
export const deleteData = (id) => {
    return async (dispatch) => {
      try {
        await firebase.database().ref(`your_database_path/${id}`).remove();
        dispatch({ type: 'DELETE_DATA_SUCCESS' });
      } catch (error) {
        console.error('Error deleting data:', error);
        dispatch({ type: 'DELETE_DATA_FAILURE', payload: error.message });
      }
    };
  };
  