import axios from "axios";

// TODO: try to move API_KEY during creating instance of axios

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
