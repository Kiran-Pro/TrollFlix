import axios from "axios";

// TODO: try to move API_KEY during creating instance of axios

export const API_KEY = "676612bb00a0e3cbd7c65ff9c8c6ef92";

const instance = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
});

export default instance;
