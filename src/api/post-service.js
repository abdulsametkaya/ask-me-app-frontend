import { settings } from "../utils/settings";
import axios from "axios";

const API_URL = settings.API_URL;

export const createPost = (post) => {
  return axios.post(`${API_URL}/posts`, post);
}

export const getPosts = () => {
  return axios.get(`${API_URL}/posts`);
}
