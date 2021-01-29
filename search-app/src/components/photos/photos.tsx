import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./photos.scss";
import {
  fetchPhotosBySearchAction,
  fetchPhotosAction,
  fetchPhotosByPaginationAction,
  selectPhotos,
  selectPageNo,
} from "../../redux/photos";
import { Photos } from "../../redux/photos/types";
const Loader = () => <div>...loading</div>;

const PhotosComponent: React.FC = () => {
  const dispatch = useDispatch();
  const [searchBy, setSearchBy] = useState("");
  const photoList: Photos | null = useSelector(selectPhotos);
  const pageNo = useSelector(selectPageNo);
  useEffect(() => {
    const loadPhotos = async () => {
      try {
        await dispatch(fetchPhotosAction());
      } catch (ex) {
        console.log(ex);
      }
    };
    loadPhotos();
  }, [dispatch]);

  useEffect(() => {
    if (searchBy?.length < 3) return;
    const loadPhotos = async () => {
      try {
        await dispatch(fetchPhotosBySearchAction(searchBy));
      } catch (ex) {
        console.log(ex);
      }
    };
    loadPhotos();
  }, [searchBy, dispatch]);
  const handleClickNext = () =>
    dispatch(fetchPhotosByPaginationAction(pageNo + 1));
  const handleClickPrevious = () =>
    dispatch(fetchPhotosByPaginationAction(pageNo - 1));
  if (photoList?.length === 0) {
    return <Loader />;
  }
  const handleChangeSearchBy = (e: any) => {
    //TODO replace any with React.element type for event
    setSearchBy(e.target.value);
  };
  return (
    <div className="container">
      <section className="container__search">
        <input
          onChange={handleChangeSearchBy}
          type="search"
          name="search"
          placeholder="search..."
        />
      </section>
      <section className="container__photos">
        <ul>
          {photoList?.map(({ id, title, thumbnailUrl }) => {
            return (
              <li key={id}>
                <div>{id}</div>
                <div>{title}</div>
                <div>{thumbnailUrl}</div>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="container__pagination">
        <button onClick={handleClickPrevious}>Previous</button>
        <div className="container__pagination--box">{pageNo}</div>
        <button onClick={handleClickNext}>Next</button>
      </section>
    </div>
  );
};
export default PhotosComponent;
