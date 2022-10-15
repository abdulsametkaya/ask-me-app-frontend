import { settings } from "../utils/settings";
import axios from "axios";

const API_URL = settings.API_URL;

export const register = (user) => {
  return axios.post(`${API_URL}/user/register`, user);
};

