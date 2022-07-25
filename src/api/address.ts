import axios from "axios";

const url = "https://huyentrangbeautycenter.herokuapp.com/address";

export const getAddress = () => axios.get(url);
