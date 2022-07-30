import axios from "axios";

const url = "https://huyentrangbeautycenter.herokuapp.com/gallery-customer";

export const getGalleryCustomerLimit = (limit: string) => axios.get(`${url}/limit-${limit}`); 

export const getGalleryCustomers = () =>
  axios.get(`${url}`); 