import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:80/api/",
});
export default instance;

// https://www.bezkoder.com/vue-refresh-token/