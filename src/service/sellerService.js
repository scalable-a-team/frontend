import api from './api';
class sellerService {

    // Note: Axios Intercepter are being used,
    //       ["Authorization"] = Bearer + Store.Token
    login(payload){
        const response = api.post('user/seller/login', payload)
        return response
    }

    register(payload){
        const response = api.post('user/seller/register', payload)
        return response
    }

    getProfile(){
        const response = api.get('user/seller/profile')
        return response
    }

    refreshToken(payload){
        const response = api.post('user/seller/refresh_token', payload)
        return response
    }

}
export default new sellerService();