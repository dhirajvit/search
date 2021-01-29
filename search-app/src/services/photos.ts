// import data from "./testData.json";
import axios from "axios";

const defaultPagination = `?_page=2&_limit=10`;
// const fetchFun = async () => new Promise((resolve, reject) => resolve(data));
export const fetchPhotos = async () => {
  //TODO read api url from .env files
  return await axios.get(
    `https://jsonplaceholder.typicode.com/photos${defaultPagination}`
  );
};
export const fetchPhotosBySearch = async (searchBy: string) => {
  return await axios.get(
    `https://jsonplaceholder.typicode.com/photos${defaultPagination}&title_like=${searchBy}`
  );
};
//TODO what about search and pagination both required
export const fetchPhotosByPagination = async (page: number) => {
  return await axios.get(
    `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
  );
};
