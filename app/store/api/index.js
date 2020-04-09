import { apiInstance } from "./instance";

export default {
  getForms: (page) =>
    apiInstance.get(`/forms`, {
      params: {
        page,
      },
    }),
  addForm: (data) => apiInstance.post(`/forms`, data),
  getForm: (id) => apiInstance.get(`/forms/${id}`),
  updateForm: ({ id, data }) => apiInstance.put(`/forms/${id}`, data),
  generateFormArchive: (id) => apiInstance.post(`/forms/${id}/export`),
};
