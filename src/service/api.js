import axios from "axios";
const instance = axios.create({
  baseURL: "/api/",
});
export default instance;

// https://www.bezkoder.com/vue-refresh-token/