import { RootState } from "../store";
export const selectPhotosState = (rootState: RootState) =>
  rootState.photosComponent
export const selectPhotos = (rootState: RootState) =>
  selectPhotosState(rootState).photos;
export const selectPageNo = (rootState:RootState)=>
selectPhotosState(rootState).pagination.pageNo
