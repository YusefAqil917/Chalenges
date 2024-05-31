// actions.js
export const INCREMENT_BY = 'INCREMENT_BY';
export const DECREMENT = 'DECREMENT';

export const incrementBy = (value) => ({
  type: INCREMENT_BY,
  payload: value,
});

export const decrement = () => ({
  type: DECREMENT,
});
