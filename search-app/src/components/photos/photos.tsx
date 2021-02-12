import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import logogreen1x from "../../img/logo-green-1x.png";
import logogreen2x from "../../img/logo-green-2x.png";
// import logogreensmall1x from "../../img/logo-green-small-1x.png";
// import logogreensmall1x from "../../img/logo-green-small-2x.png";
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
  const handleClickNext = useCallback(
    () => dispatch(fetchPhotosByPaginationAction(pageNo + 1)),
    [pageNo, dispatch]
  );
  const handleClickPrevious = useCallback(
    () => dispatch(fetchPhotosByPaginationAction(pageNo - 1)),
    [pageNo, dispatch]
  );

  if (photoList?.length === 0) {
    return <Loader />;
  }
  const handleChangeSearchBy = (event: React.ChangeEvent<HTMLInputElement>) => {
    //TODO replace any with React.element type for event
    setSearchBy(event.target.value);
  };
  return (
    <div className="container">
      <section className="container__search">
        <img
          srcSet={`${logogreen1x} 1x, ${logogreen2x} 2x`}
          alt="logogreen1x"
        />
        <input
          onChange={handleChangeSearchBy}
          type="search"
          name="search"
          placeholder="search..."
        />
        <picture>
          <source
            srcSet={`${logogreen1x} 1x, ${logogreen2x} 2x`}
            media={"max-width:37.5em"}
          ></source>
          <img
            srcSet={`${logogreen1x} 1x, ${logogreen2x} 2x`}
            alt="logogreen1x"
          />{" "}
        </picture>
      </section>
      <section className="container__photos">
        <ul>
          {photoList?.map(({ id, title, url }) => {
            return (
              <li key={id}>
                <div className="container__photos--id">{id}</div>
                <div className="container__photos--title">{title}</div>
                <img className="container__photos--img" src={url} alt={url} />
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
