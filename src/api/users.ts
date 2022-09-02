import axios from "axios";
import { UserModel } from "../model/UserModel";
import { baseUrl } from "./baseUrl";

export const registerApi = (user: UserModel) => axios.post(`${baseUrl}/user/register`, user);

export const loginApi = (user: UserModel) => axios.post(`${baseUrl}/user/login`, user);

export const getSession = () => axios.get(`${baseUrl}/get-session`);