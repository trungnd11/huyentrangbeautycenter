import axios from "axios";
import { baseUrl } from "./baseUrl";

const url = `${baseUrl}/about`;

export const getAbout = () => axios.get(url);