import data from "./testData.json";
const fetchFun = async () => new Promise((resolve, reject) => resolve(data));
export const fetchPhotos = async () => {
  return await fetchFun();
};
