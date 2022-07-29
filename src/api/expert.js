import axios from "axios";

const url = "https://huyentrangbeautycenter.herokuapp.com/expert";

export const getExperts = () => axios.get(url);