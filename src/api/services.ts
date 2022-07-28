import axios from "axios";

const url = "https://huyentrangbeautycenter.herokuapp.com/service";

export const getServiceLimit = (limit: number) => axios.get(`${url}/limit-${limit}`);

export const getServices = () => axios.get(url);

export const findServicesByType = (data: any) => {
  return axios.post(`${url}/type`, data);
}