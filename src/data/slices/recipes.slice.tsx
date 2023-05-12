import { createSlice, Slice } from '@reduxjs/toolkit';
import { recipesInitialState } from '@data/states/recipes.state.tsx';
import { addRecipeAction } from '@actions/recipes/addRecipe.action.tsx';
import { removeRecipeAction } from '@actions/recipes/removeRecipe.action.tsx';
import { updateRecipeAction } from '@actions/recipes/updateRecipe.action.tsx';
import { setRecipesAction } from '@actions/recipes/setRecipes.action.tsx';
import { RecipesState } from '@states/recipes.state.tsx';

export const recipesSlice: Slice<RecipesState> = createSlice({
  name: 'recipes',
  initialState: recipesInitialState,
  reducers: {
    addRecipe: addRecipeAction,
    removeRecipe: removeRecipeAction,
    updateRecipe: updateRecipeAction,
    setRecipes: setRecipesAction
  }
});

export const { addRecipe, removeRecipe, updateRecipe, setRecipes } =
  recipesSlice.actions;
