import axios from "axios";
import { baseUrl } from "./baseUrl";

const url = `${baseUrl}/service`;

export const getServiceLimit = (limit: number) => axios.get(`${url}/limit-${limit}`);

export const getServices = () => axios.get(url);

export const findServicesByType = (data: any) => {
  return axios.post(`${url}/type`, data);
}