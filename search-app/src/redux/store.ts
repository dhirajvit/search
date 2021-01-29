import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { PhotosReducer } from ".";

export const rootReducer = combineReducers({
  photosComponent: PhotosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
