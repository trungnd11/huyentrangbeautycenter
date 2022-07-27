import axios from "axios";

const url = "https://huyentrangbeautycenter.herokuapp.com/service-type";

export const getServiceType = () => axios.get(url);