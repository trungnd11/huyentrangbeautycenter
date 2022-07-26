import axios from "axios";

const url = "https://huyentrangbeautycenter.herokuapp.com/about";

export const getAbout = () => axios.get(url);