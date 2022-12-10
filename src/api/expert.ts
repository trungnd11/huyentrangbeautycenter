import axios from "axios";
import { baseUrl } from "./baseUrl";

const url = `${baseUrl}/expert`;

export const getExperts = () => axios.get(url);