import React from 'react';
import { useDispatch } from 'react-redux';
import { updateData, deleteData } from './actions';

const Component = ({ id, data }) => {
  const dispatch = useDispatch();

  const handleUpdateData = () => {
    const newData = { /* new data */ };
    dispatch(updateData(id, newData));
  };

  const handleDeleteData = () => {
    dispatch(deleteData(id));
  };

  return (
    <div>
      <p>Data: {data}</p>
      <button onClick={handleUpdateData}>Update Data</button>
      <button onClick={handleDeleteData}>Delete Data</button>
    </div>
  );
};

export default Component;
