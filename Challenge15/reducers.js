// reducers.js
const initialState = {
    deleteError: null,
  };
  
  const imageReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'DELETE_IMAGE_SUCCESS':
        return {
          ...state,
          deleteError: null,
        };
      case 'DELETE_IMAGE_FAILURE':
        return {
          ...state,
          deleteError: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default imageReducer;
  