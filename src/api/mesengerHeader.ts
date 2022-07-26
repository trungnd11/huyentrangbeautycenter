import axios from "axios";

const url = "https://huyentrangbeautycenter.herokuapp.com/mesenger-header";

export const getMesengerHeader = () => axios.get(url);