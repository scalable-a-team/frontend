import axiosInstance from "./api";

const setup = (store) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = store.state.access_token;
      if (token) {
        config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
        // config.headers["x-access-token"] = token; // for Node.js Express back-end
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;

      if (store.state.role == 'customer'){ //TODO: May require name changes
        if (originalConfig.url !== "user/customer/login" && err.response) {
            // Access Token was expired
            if (err.response.status === 401 && !originalConfig._retry) {
              originalConfig._retry = true;
              try {
                const rs = await axiosInstance.post("user/customer/refresh_token", {
                    refresh_token: store.state.refresh_token,
                });
                const { access_token } = rs.data;
                store.dispatch('set_access_token',{access_token: access_token})
                return axiosInstance(originalConfig);
              } catch (_error) {
                return Promise.reject(_error);
              }
            }
          }
      } 

      if (store.state.role == 'seller'){ //TODO: May require name changes
        if (originalConfig.url !== "user/seller/login" && err.response) {
            // Access Token was expired
            if (err.response.status === 401 && !originalConfig._retry) {
              originalConfig._retry = true;
              try {
                const rs = await axiosInstance.post("user/seller/refresh_token", {
                    refresh_token: store.state.refresh_token,
                });
                const { access_token } = rs.data;
                store.dispatch('set_access_token',{access_token: access_token})
                return axiosInstance(originalConfig);
              } catch (_error) {
                return Promise.reject(_error);
              }
            }
          }
      } 

      return Promise.reject(err);
    }
  );
};

export default setup;