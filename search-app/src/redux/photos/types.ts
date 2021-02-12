import { AnyAction } from "redux";
export const FETCH_PHOTOS_SUCCESS = "FETCH_PHOTOS_SUCCESS";
export const SEARCH_PHOTOS_SUCCESS = "SEARCH_PHOTOS_SUCCESS";
export const FETCH_PHOTOS_BY_PAGINATION_SUCCESS =
  "FETCH_PHOTOS_BY_PAGINATION_SUCCESS";
export const FETCH_PHOTOS_NEXT = "FETCH_PHOTOS_NEXT";
export const FETCH_PHOTOS_PREVIOUS = "FETCH_PHOTOS_PREVIOUS";
export interface Photo {
  id: number;
  title: string;
  url: string;
}
export type Photos = Array<Photo>;

interface FetchPhotosAction extends AnyAction {
  payload: { photos: Array<Photo> };
}

interface SearchPhotosAction extends AnyAction {
  payload: { photos: Array<Photo> };
}
export interface FetchPhotosByPaginationAction extends AnyAction {
  payload: { photos: Array<Photo>; pageNo: number };
}
export interface PhotosState {
  photos: Array<Photo> | null;
  pagination: {
    pageNo: number;
  };
}

export type FetchPhotosByPaginationActionTypes = FetchPhotosByPaginationAction;
export type PhotosActionTypes =
  | FetchPhotosAction
  | SearchPhotosAction
  | FetchPhotosByPaginationAction;
