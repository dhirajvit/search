import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./photos.scss";
import { fetchPhotosAction, selectPhotos } from "../../redux/photos";
import { Photos } from "../../redux/photos/types";
const Loader = () => <div>...loading</div>;

const PhotosComponent: React.FC = () => {
  const dispatch = useDispatch();
  const photoList: Photos | null = useSelector(selectPhotos);
  useEffect(() => {
    const loadPhotos = async () => {
      try {
        await dispatch(fetchPhotosAction("test"));
      } catch (ex) {
        console.log(ex);
      }
    };
    loadPhotos();
  }, [dispatch]);

  if (photoList?.length === 0) {
    return <Loader />;
  }

  return (
    <div className="container">
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
    </div>
  );
};
export default PhotosComponent;
