import { instance, getResponseData, catchError } from "./index";

export default class PetsApi {
  static async getPets() {
    return await instance.get("pet").then(getResponseData).catch();
  }

  static async getPet(petId) {
    return await instance
      .get(`pet/${petId}`)
      .then(getResponseData)
      .catch(catchError);
  }

  static async registPet(petData) {
    return await instance
      .post("pet", petData)
      .then(getResponseData)
      .catch(catchError);
  }

  static async updatePet(petData) {
    return await instance
      .put(`pet/${petData.id}`, petData)
      .then(getResponseData)
      .catch(catchError);
  }

  static async deletePet(petId) {
    return await instance
      .delete(`pet/${petId}`)
      .then(getResponseData)
      .catch(catchError);
  }
}
