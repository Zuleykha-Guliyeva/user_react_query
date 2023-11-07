import { API } from "../../../core/configs/api.config";
import axiosInstance from "../../../core/configs/axios.config";
// import TableModel from "../models/table.model";

export const getUsersService = () => {
  return axiosInstance.get(API.users).then((res) => {
    return res.data;    
  });
};
export const deleteUserService = (userId: number): Promise<any> => {
  return axiosInstance.delete(API.users+`/${userId}`).then((res) => res.data);
};
