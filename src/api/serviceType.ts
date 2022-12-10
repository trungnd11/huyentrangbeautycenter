import axios from "axios";
import { baseUrl } from "./baseUrl";

const url = `${baseUrl}/service-type`;

export const getServiceType = () => axios.get(url);