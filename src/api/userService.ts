import axios from "axios";
import type { User } from "@/types/User";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const userService = {
  async getAll(): Promise<User[]> {
    const { data } = await api.get<User[]>("/users");
    return data;
  },
  async create(user: Omit<User, "id">): Promise<User> {
    const { data } = await api.post<User>("/users", user);
    return data;
  },
  async update(id: number, user: Partial<User>): Promise<User> {
    const { data } = await api.put<User>(`/users/${id}`, user);
    return data;
  },
  async remove(id: number): Promise<void> {
    await api.delete(`/users/${id}`);
  },
};
