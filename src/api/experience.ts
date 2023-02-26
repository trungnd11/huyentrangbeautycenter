import axios from "axios";
import { baseUrl } from "./baseUrl";

const url = `${baseUrl}/experience`;

export const getExperience = () => axios.get(url);