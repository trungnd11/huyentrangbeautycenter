import axios from "axios";
import { baseUrl } from "./baseUrl";

const url = `${baseUrl}/banners`;

export const getBanners = () => axios.get(url);