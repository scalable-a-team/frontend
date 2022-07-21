import api from "./api";
class customerService {
  // Note: Axios Intercepter are being used,
  //       ["Authorization"] = Bearer + Store.Token
  login(payload) {
    const response = api.post("chat/get_message/login", payload);
    return response;
  }

  register(payload) {
    const response = api.post("user/customer/register", payload);
    return response;
  }

  getProfile() {
    const response = api.get("user/customer/profile");
    return response;
  }

  increaseBalance(payload) {
    const response = api.post("user/customer/increase_balance", payload);
    return response;
  }

  refreshToken(payload) {
    const response = api.post("user/customer/refresh_token", payload);
    return response;
  }
}
export default new customerService();
