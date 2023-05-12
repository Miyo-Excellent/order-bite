import { createSlice, Slice } from '@reduxjs/toolkit';
import {
  shoppingCarInitialState,
  ShoppingCarState
} from '@states/shoppingCar.state.tsx';
import { addItemAction } from '@actions/shoppingCar/addItem.action.tsx';
import { removeItemAction } from '@actions/shoppingCar/removeItem.action.tsx';
import { updateItemAction } from '@actions/shoppingCar/updateItem.action.tsx';
import { setItemsAction } from '@actions/shoppingCar/setItems.action.tsx';

export const shoppingCarSlice: Slice<ShoppingCarState> = createSlice({
  name: 'shoppingCar',
  initialState: shoppingCarInitialState,
  reducers: {
    addItem: addItemAction,
    removeItem: removeItemAction,
    updateItem: updateItemAction,
    setItems: setItemsAction
  }
});

export const { addItem, removeItem, updateItem, setItems } =
  shoppingCarSlice.actions;
