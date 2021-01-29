import { fetchPhotos, fetchPhotosBySearch, fetchPhotosByPagination } from "../../services";
import { FETCH_PHOTOS_SUCCESS, SEARCH_PHOTOS_SUCCESS,FETCH_PHOTOS_BY_PAGINATION_SUCCESS, Photo } from "./types";

export const fetchPhotosAction = () => {
  return async (dispatch: any) => {
    //TODO dispatch a request initiated
    try {
      const response: any = await fetchPhotos();
      const photos: Array<Photo> = response.data.map(
        ({ id, title, thumbnailUrl }: Photo) => ({
          id,
          title,
          thumbnailUrl,
        })
      );
      dispatch({
        type: FETCH_PHOTOS_SUCCESS,
        payload: { photos },
      });
    } catch (ex) {
      //TODO dispatch a failure
    }
  };
};
export const fetchPhotosByPaginationAction = (pageNo:number) => {
  return async (dispatch: any) => {
    //TODO dispatch a request initiated
    try {
      const response: any = await fetchPhotosByPagination(pageNo);
      const photos: Array<Photo> = response.data.map(
        ({ id, title, thumbnailUrl }: Photo) => ({
          id,
          title,
          thumbnailUrl,
        })
      );
      dispatch({
        type: FETCH_PHOTOS_BY_PAGINATION_SUCCESS,
        payload: { photos,pageNo },
      });
    } catch (ex) {
      //TODO dispatch a failure
    }
  };
};

export const fetchPhotosBySearchAction = (searchBy: string) => {
  return async (dispatch: any) => {
    //TODO dispatch a request initiated
    try {
      const response: any = await fetchPhotosBySearch(searchBy);
      const photos: Array<Photo> = response.data.map(
        ({ id, title, thumbnailUrl }: Photo) => ({
          id,
          title,
          thumbnailUrl,
        })
      );
      dispatch({
        type: SEARCH_PHOTOS_SUCCESS,
        payload: { photos },
      });
    } catch (ex) {
      //TODO dispatch a failure
    }
  };
};
