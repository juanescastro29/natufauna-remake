import { instance, getResponseData, catchError } from "./index";

export default class AdoptionsApi {
  static async getAdoptions() {
    return await instance.get("adoption").then(getResponseData).catch();
  }

  static async getAdoption(adoptionId) {
    return await instance
      .get(`adoption/${adoptionId}`)
      .then(getResponseData)
      .catch(catchError);
  }

  static async createAdoption(adoptionData) {
    return await instance
      .post("adoption", adoptionData)
      .then(getResponseData)
      .catch(catchError);
  }

  static async updateAdoption(adoptionData) {
    return await instance
      .put(`adoption/${adoptionData.id}`, adoptionData)
      .then(getResponseData)
      .catch(catchError);
  }

  static async deleteAdoption(adoptionId) {
    return await instance
      .delete(`adoption/${adoptionId}`)
      .then(getResponseData)
      .catch(catchError);
  }
}
