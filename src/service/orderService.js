import api from './api';
class orderService {

    // Note: Axios Intercepter are being used,
    //       ["Authorization"] = Bearer + Store.Token

    query_order(payload){
    if (payload.status !== ''){
            const response = api.get(`order/${payload.role}?page=${payload.page}&status=${payload.status}`)
            return response
        }
        const response = api.get(`order/${payload.role}?page=${payload.page}`)
        return response
    }

}
export default new orderService();