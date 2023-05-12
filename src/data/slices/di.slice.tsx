import { createSlice, Slice } from '@reduxjs/toolkit';
import { diInitialState } from '@data/states/di.state.tsx';
import { DiState } from '@states/di.state.tsx';
import { isLoadingAction } from '@actions/di/isLoading.action';

export const diSlice: Slice<DiState> = createSlice({
  name: 'di',
  initialState: diInitialState,
  reducers: {
    isLoading: isLoadingAction
  }
});

export const { isLoading } = diSlice.actions;
