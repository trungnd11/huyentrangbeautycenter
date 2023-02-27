import axios from "axios";
import { OptionPage } from "../model/component/PageModel";
import { baseUrl } from "./baseUrl";

const url = `${baseUrl}/service`;

export const getServiceLimit = (limit: number) => axios.get(`${url}/limit-${limit}`);

export const getServices = (optionPage: OptionPage) => axios.get(url, { params: optionPage });

export const findServicesByType = (data: any, optionPage: OptionPage) => {
  return axios.post(`${url}/type`, data, { params: optionPage });
}