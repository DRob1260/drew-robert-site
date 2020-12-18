import axios, { AxiosResponse } from "axios";
import { Urls } from "../../config";

export const getFlickrUserPhotoUrls = (userId: string): Promise<string[]> => {
  return axios
    .get(`${Urls.galleryApi}/flickr/users/${userId}/photos`)
    .then((response: AxiosResponse<string[]>) => {
      return response.data;
    });
};
