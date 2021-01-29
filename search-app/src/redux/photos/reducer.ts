import { fetchPhotos } from "../../services";
import {
  PhotosState,
  Photos,
  Photo,
  PhotosActionTypes,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_NEXT,
  FETCH_PHOTOS_PREVIOUS,
} from "./types";
const initialState: PhotosState = {
  photos: [],
  pagination: {
    startPosition: 0,
    endPosition: 0,
  },
};

const reducer = (
  state: PhotosState = initialState,
  action: PhotosActionTypes
) => {
  switch (action.type) {
    case FETCH_PHOTOS_SUCCESS: {
      // TODO verify the boundary conditions with pagination
      const { photos } = action.payload;
      return {
        ...state,
        photos,
        pagination: {
          startPosition: 0,
          endPosition: 10,
        },
      };
    }
    case FETCH_PHOTOS_PREVIOUS: {
      //TODO add code
      return state;
    }
    case FETCH_PHOTOS_NEXT: {
      //TODO add code
      return state;
    }
    default:
      return state;
  }
};
export default reducer;
