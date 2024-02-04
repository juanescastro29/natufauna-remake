import { instance, getResponseData, catchError } from "./index";

export default class UsersApi {
  static async getUsers() {
    return await instance.get("user").then(getResponseData).catch();
  }

  static async getUser(userId) {
    return await instance
      .get(`user/${userId}`)
      .then(getResponseData)
      .catch(catchError);
  }

  static async registUser(userData) {
    return await instance
      .post("user", userData)
      .then(getResponseData)
      .catch(catchError);
  }

  static async loginUser(userData) {
    return await instance
      .post("user/login", userData)
      .then(getResponseData)
      .catch(catchError);
  }

  static async updateUser(userData) {
    return await instance
      .put(`user/${userData.id}`, userData)
      .then(getResponseData)
      .catch(catchError);
  }

  static async deleteUser(userId) {
    return await instance
      .delete(`user/${userId}`)
      .then(getResponseData)
      .catch(catchError);
  }
}
