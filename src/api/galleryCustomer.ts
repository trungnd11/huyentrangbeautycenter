import axios from "axios";
import { baseUrl } from "./baseUrl";

const url = `${baseUrl}/gallery-customer`;

export const getGalleryCustomerLimit = (limit: string) => axios.get(`${url}/limit-${limit}`); 

export const getGalleryCustomers = () =>
  axios.get(`${url}`); 