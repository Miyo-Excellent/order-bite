import { configureStore } from '@reduxjs/toolkit';
import { EnhancedStore } from '@reduxjs/toolkit/src/configureStore.ts';
import { recipesSlice } from '@slices/recipes.slice.tsx';
import { diSlice } from '@slices/di.slice.tsx';
import { shoppingCarSlice } from '@slices/shoppingCar.slice';

export const mainStore: EnhancedStore = configureStore({
  reducer: {
    shoppingCar: shoppingCarSlice.reducer,
    recipes: recipesSlice.reducer,
    di: diSlice.reducer
  }
});
