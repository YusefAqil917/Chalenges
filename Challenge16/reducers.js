const initialState = {
    updateError: null,
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_DATA_SUCCESS':
        return {
          ...state,
          updateError: null,
        };
      case 'UPDATE_DATA_FAILURE':
        return {
          ...state,
          updateError: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default dataReducer;
  
  