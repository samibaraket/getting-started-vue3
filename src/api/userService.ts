import { User } from "@/types/User.js";
import axios from "axios";


const api = axios.create({
  //baseURL: "https://jsonplaceholder.typicode.com",
  baseURL: "http://localhost:8080/api"
});

export const userService = {
  async getAll(): Promise<User[]> {
    const { data } = await api.get<User[]>("/users");
    return data;
  },
  async create(user: Omit<User, "id">): Promise<User> {
    const { data } = await api.post<User>("/users/add", user);
    return data;
  },
  async update(user: Partial<User>): Promise<User> {
    const { data } = await api.put<User>(`/users/update`, user);
    return data;
  },
  async remove(id: number): Promise<void> {
    await api.delete(`/users/${id}`);
  },
};
