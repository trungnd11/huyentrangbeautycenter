import axios from "axios";

const url = "https://huyentrangbeautycenter.herokuapp.com/service";

export const getServiceLimit = (limit: number) => axios.get(`${url}/limit-${limit}`);