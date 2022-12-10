import axios from "axios";
import { baseUrl } from "./baseUrl";

const url = `${baseUrl}/address`;

export const getAddress = () => axios.get(url);
