import axios from "axios";

const url = "https://huyentrangbeautycenter.herokuapp.com/banners";

export const getBanners = () => axios.get(url);