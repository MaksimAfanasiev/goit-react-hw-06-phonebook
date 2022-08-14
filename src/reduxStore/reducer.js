import { addItem, removeItem, filterValue } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const initState = {
  items: [],
  filter: '',
};

// Reducer

export const rootReducer = createReducer(initState, {
  [addItem]: (state, action) => {
    state.items.push(action.payload);
  },
  [removeItem]: (state, action) => {
    state.items = state.items.filter(item => item.id !== action.payload);
  },
  [filterValue]: (state, action) => {
    state.filter = action.payload;
  },
});
