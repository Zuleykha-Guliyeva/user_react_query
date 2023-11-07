import axios from "axios";
import { API } from "../../../core/configs/api.config";

export const addUser = async (user: any): Promise<any> => {
  //   console.log(user);
  try {
    const response = await axios.post("http://localhost:3000/users/", user[0]);
    return response.data;
  } catch (error) {
    console.error("xeta bas verdi");
  }
  //   return axios.post("http://localhost:3000/users/", user).then((res) => res.data);
};
