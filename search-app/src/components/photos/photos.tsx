import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./photos.scss";
import {
  fetchPhotosBySearchAction,
  fetchPhotosAction,
  selectPhotos,
} from "../../redux/photos";
import { Photos } from "../../redux/photos/types";
const Loader = () => <div>...loading</div>;

const PhotosComponent: React.FC = () => {
  const dispatch = useDispatch();
  const [searchBy, setSearchBy] = useState("");
  const photoList: Photos | null = useSelector(selectPhotos);
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

  if (photoList?.length === 0) {
    return <Loader />;
  }
  const handleChangeSearchBy = (e: any) => {
    //TODO replace any with React.element type for event
    console.log(e.target.value);
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
      <section className="container__pagination"></section>
    </div>
  );
};
export default PhotosComponent;
