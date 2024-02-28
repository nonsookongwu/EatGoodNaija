import { TSignUpSchema } from "../utils/validation";
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

  deleteUser(id: number) {
    return ApiClient.delete("/users/" + id);
  }

  addUser(user: TSignUpSchema) {
    return ApiClient.post("/auth/signup", user);
  }

  updateUser(id: number, users: TSignUpSchema) {
    return ApiClient.patch("/users/" + id, users);
  }
}

export default new UserService();
