import { configureStore } from '@reduxjs/toolkit';
import { EnhancedStore } from '@reduxjs/toolkit/src/configureStore.ts';
import { recipesSlice } from '@slices/recipes.slice.tsx';

export const mainStore: EnhancedStore = configureStore({
  reducer: {
    recipes: recipesSlice.reducer
  }
});
