import { defineStore } from "pinia";
import { userService } from "@/api/userService.js";
import type { User } from "@/types/User.js";

export const userWorkerService = defineStore("user", {
  state: () => ({
    users: [] as User[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async getUsers() {
      this.loading = true;
      try {
        this.users = await userService.getAll();
      } catch (e: any) {
        this.error = e.message;
      } finally {
        this.loading = false;
      }
    },

    async addUser(user: Omit<User, "id">) {
      const newUser = await userService.create(user);
      this.users.push(newUser);
    },

    async updateUser(id: number, user: Partial<User>) {
      const updated = await userService.update(user);
      const index = this.users.findIndex((u) => u.id === id);
      if (index !== -1) this.users[index] = updated;
    },

    async deleteUser(id: number) {
      await userService.remove(id);
      this.users = this.users.filter((u) => u.id !== id);
    },
  },
});
