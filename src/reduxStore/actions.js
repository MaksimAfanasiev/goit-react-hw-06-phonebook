import { createAction } from '@reduxjs/toolkit';

export const addItem = createAction('AddItem');
export const removeItem = createAction('RemoveItem');
export const filterValue = createAction('FilterItems');
