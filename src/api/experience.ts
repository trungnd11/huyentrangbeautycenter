import axios from "axios";

const url = "https://huyentrangbeautycenter.herokuapp.com/experience";

export const getExperience = () => axios.get(url);