import { UserAuth } from "../context/UserContext";
import { TEmailSchema, TLoginSchema, TPasswordSchema, TSignUpSchema } from "../utils/validation";
import ApiClient from "./apiClient";

// export interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: Address
//   phone: string;
//   website: string;
// }
class UserService {
  getAllUsers() {
    const controller = new AbortController();

    const request = ApiClient.get<TSignUpSchema[]>("/users", {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  getUser() {
    const controller = new AbortController();

    const request = ApiClient.get<UserAuth>("/users/user", {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  deleteUser(id: number) {
    return ApiClient.delete("/users/" + id);
  }

  signupUser(user: TSignUpSchema) {
    return ApiClient.post("/auth/signup", user);
  }
  signupVendor(user: TSignUpSchema) {
    return ApiClient.post("/auth/vendor-signup", user);
  }

  loginUser(user: TLoginSchema) {
    return ApiClient.post("/auth/login", user);
  }

  forgotPassword(user: TEmailSchema) {
    return ApiClient.post("/auth/forgot-password", user);
  }

  resetPassword(id: string | undefined, data: TPasswordSchema) {
    return ApiClient.post(`/auth/reset-password/${id}`, data);
  }

  updateUser(id: number, users: TSignUpSchema) {
    return ApiClient.patch("/users/" + id, users);
  }
}

export default new UserService();
