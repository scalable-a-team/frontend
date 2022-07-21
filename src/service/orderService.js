import api from './api';
class orderService {

    // Note: Axios Intercepter are being used,
    //       ["Authorization"] = Bearer + Store.Token


    query_order(payload){
        if (payload.role === 'customer'){
            const response = api.get(`order/buyer/?page=${payload.page}&status=${payload.status}`)
            return response
        }
        const response = api.get(`order/buyer/?page=${payload.page}&status=${payload.status}`)
        return response
    }

}
export default new orderService();