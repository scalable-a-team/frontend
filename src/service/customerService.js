import api from './api';
class customerService {

    // Note: Axios Intercepter are being used,
    //       ["Authorization"] = Bearer + Store.Token
    login(payload){
        const response = api.post('/customer/login', payload)
        return response
    }

    register(payload){
        const response = api.post('/customer/register', payload)
        return response
    }

    getProfile(){
        const response = api.get('/customer/profile')
        return response
    }

    increaseBalance(payload){
        const response = api.post('/customer/increase_balance', payload)
        return response
    }

    refreshToken(payload){
        const response = api.post('/customer/refresh_token', payload)
        return response
    }

}
export default new customerService();