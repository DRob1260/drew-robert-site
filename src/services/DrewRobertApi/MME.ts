import { MmeForumOrder } from "../../models/MME/api/MmeForumOrder";
import axios, { AxiosResponse } from "axios";
import { Urls } from "../../config";

export const retrieveMmeForumOrders = (): Promise<MmeForumOrder[]> => {
  return axios
    .get(`${Urls.mmeApi}/mme-forum/order-submissions`)
    .then((axiosResponse: AxiosResponse<MmeForumOrder[]>) => {
      return axiosResponse.data;
    });
};
