import axios from "axios";
import { baseUrl } from "./baseUrl";

export const getBlogs = (limit?: string) => axios.get(`${baseUrl}/blogs?limit=${limit}`);