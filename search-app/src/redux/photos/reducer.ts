import {
  PhotosState,
  PhotosActionTypes,
  FETCH_PHOTOS_SUCCESS,
  SEARCH_PHOTOS_SUCCESS,
  FetchPhotosByPaginationAction,
  FetchPhotosByPaginationActionTypes,
  FETCH_PHOTOS_BY_PAGINATION_SUCCESS,
} from "./types";
const initialState: PhotosState = {
  photos: [],
  pagination: {
    pageNo: 1,
  },
};

const reducer = (
  state: PhotosState = initialState,
  action: PhotosActionTypes | FetchPhotosByPaginationActionTypes
): PhotosState => {
  switch (action.type) {
    case FETCH_PHOTOS_SUCCESS: {
      // TODO verify the boundary conditions with pagination
      const { photos } = action.payload;
      return {
        ...state,
        photos,
        pagination: {
          ...state.pagination,
          pageNo: 1,
        },
      };
    }
    case SEARCH_PHOTOS_SUCCESS: {
      // TODO verify the boundary conditions with pagination
      const { photos } = action.payload;
      return {
        ...state,
        photos,
        pagination: {
          ...state.pagination,
          pageNo: 1,
        },
      };
    }
    case FETCH_PHOTOS_BY_PAGINATION_SUCCESS: {
      // TODO verify the boundary conditions with pagination
      const typedAction = action as FetchPhotosByPaginationAction;
      const { photos, pageNo } = typedAction.payload;

      return {
        ...state,
        photos,
        pagination: {
          ...state.pagination,
          pageNo: pageNo,
        },
      };
    }
    default:
      return state;
  }
};
export default reducer;
