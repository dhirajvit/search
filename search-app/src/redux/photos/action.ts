import { fetchPhotos } from "../../services";
import { FETCH_PHOTOS_SUCCESS } from "./types";

export const fetchPhotosAction = (searchBy: string) => {
  return async (dispatch: any) => {
    //TODO dispatch a request initiated
    try {
      const response: any = await fetchPhotos();
      dispatch({
        type: FETCH_PHOTOS_SUCCESS,
        payload: { photos: response },
      });
    } catch (ex) {
      //TODO dispatch a failure
    }
  };
};
