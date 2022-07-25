import axios from "axios";

const url = "https://huyentrangbeautycenter.herokuapp.com/phone";

export const getPhone = () => axios.get(url);
