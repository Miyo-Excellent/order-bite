import { EdamamApiRepositoryData } from '@dataRepositories/edamamApi.repositoryData';
import { EdamamApiServiceData } from '@dataServices/edamamApi.serviceData';
import { EdamamApiRepository } from '@repositories/edamamApi.repository';
import { EdamamApiService } from '@services/edamamApi.service';

export interface DiState {
  isLoading: boolean;
}

export const edamamApiService: EdamamApiServiceData = new EdamamApiService({
  appId: import.meta.env.VITE_EDAMAM_API_APP_ID,
  appKey: import.meta.env.VITE_EDAMAM_API_APP_KEY
});

export const edamamApiRepository: EdamamApiRepositoryData =
  new EdamamApiRepository(edamamApiService);
export const diInitialState: DiState = {
  isLoading: false
};
