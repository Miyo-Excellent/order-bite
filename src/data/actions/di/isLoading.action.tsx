import { Action } from '@dataTypes/action.type.tsx';
import { HandleAction } from '@dataTypes/handleAction.type.tsx';
import { DiState } from '@states/di.state.tsx';
import { DiTypes } from '@actionTypes/di.types.tsx';
import { IsLoadingPayload } from '@payloads/di/isLoading.payload.tsx';

export const isLoadingAction: HandleAction<DiState> = (
  state: DiState,
  action: Action<DiTypes, IsLoadingPayload>
): void => {
  state.isLoading = action.payload;
};
