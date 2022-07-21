import api from './api';
class productService {

    // {
    //     "product": {
    //         "product_name": "string",
    //         "description": "string",
    //         "price" : "float",
    //         "tags" : ["Any array of TAG IDS!!! Get tag ids from get tags endpoint"],
    //         "categories": ["Same as tags, get them from category endpoint"],
    //         "image_url": ["An array of image urls that you want to attach to product"]
    //     }
    // }
    create_product(payload){
        const response = api.post('product/create/product/', payload)
        return response
    }
    
    create_category(payload){
        const response = api.post('product/create/category', payload)
        return response
    }

    create_tag(payload){
        const response = api.post('product/create/tag', payload)
        return response
    }

    create_tag(payload){
        const response = api.post('product/create/review', payload)
        return response
    }

    create_photo(formData){
        const response = api.post('product/create/review', formData)
        return response
    }

    list_all_categories(){
        const response = api.post('product/categories')
        return response
    }

    list_all_tags(){
        const response = api.post('product/tags')
        return response
    }

    list_all_products(){
        const response = api.post('product/all_products')
        return response
    }

    delete_product(pid){
        const response = api.post('product/delete/' + pid)
        return response
    }

    delete_es_product(pid){
        const response = api.post('product/es/delete/' + pid)
        return response
    }

    get_one_product(id){
        const response = api.post('product/get/' + id)
        return response
    }

}
export default new productService();