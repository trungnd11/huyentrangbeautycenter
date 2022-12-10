import axios from "axios";
import { baseUrl } from "./baseUrl";

const url = `${baseUrl}/phone`;

export const getPhone = () => axios.get(url);
