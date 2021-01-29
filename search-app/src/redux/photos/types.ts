import { AnyAction } from "redux";
export const FETCH_PHOTOS_SUCCESS = "FETCH_PHOTOS_SUCCESS";
export const SEARCH_PHOTOS_SUCCESS = "SEARCH_PHOTOS_SUCCESS";
export const FETCH_PHOTOS_NEXT = "FETCH_PHOTOS_NEXT";
export const FETCH_PHOTOS_PREVIOUS = "FETCH_PHOTOS_PREVIOUS";
export interface Photo {
  id: number;
  title: string;
  thumbnailUrl: string;
}
export type Photos = Array<Photo>;

interface FetchPhotosAction extends AnyAction {
  payload: { photos: Array<Photo> };
}
interface SearchPhotosAction extends AnyAction {
  payload: { photos: Array<Photo> };
}

export interface PhotosState {
  photos: Array<Photo> | null;
  pagination: {
    startPosition: number;
    endPosition: number;
  };
}

export type PhotosActionTypes = FetchPhotosAction | SearchPhotosAction
