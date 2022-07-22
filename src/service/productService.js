import api from "./api";
class productService {
  create_product(payload) {
    const response = api.post("product/create/product/", payload);
    return response;
  }

  create_category(payload) {
    const response = api.post("product/create/category", payload);
    return response;
  }

  create_tag(payload) {
    const response = api.post("product/create/tag", payload);
    return response;
  }

  create_tag(payload) {
    const response = api.post("product/create/review", payload);
    return response;
  }

  create_photo(formData) {
    const response = api.post("product/create/review", formData);
    return response;
  }

  list_all_categories() {
    const response = api.post("product/categories");
    return response;
  }

  list_all_tags() {
    const response = api.post("product/tags");
    return response;
  }

  list_all_products() {
    const response = api.post("product/all_products");
    return response;
  }

  list_products(payload) {
    console.log(payload);
    const response = api.get("/product/es/search/?", {
      params: {
        query: payload.query,
        from: payload.from,
        size: payload.size,
      },
    });
    return response;
  }

  delete_product(pid) {
    const response = api.post("product/delete/" + pid);
    return response;
  }

  delete_es_product(pid) {
    const response = api.post("product/es/delete/" + pid);
    return response;
  }

  get_one_product(id) {
    const response = api.get("product/" + id);
    return response;
  }
}
export default new productService();
