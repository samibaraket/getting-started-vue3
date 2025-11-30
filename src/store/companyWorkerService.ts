import { companyService } from "@/api/companyService.js";
import { Company } from "@/types/Company.js";
import { defineStore } from "pinia";

export const companyWorkerService = defineStore("company", {
  state: () => ({
    companies: [] as Company[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async getCompanies() {
      this.loading = true;
      try {
        this.companies = await companyService.getAll();
      } catch (e: any) {
        this.error = e.message;
      } finally {
        this.loading = false;
      }
    },
    async addCompany(company: Omit<Company, "id">) {
      const newCompany = await companyService.create(company);
      this.companies.push(newCompany);
    },

    async updateCompany(id: number, company: Partial<Company>) {
      const updated = await companyService.update(company);
      const index = this.companies.findIndex((u) => u.id === id);
      if (index !== -1) this.companies[index] = updated;
    },

    async deleteCompanyr(id: number) {
      await companyService.remove(id);
      this.companies = this.companies.filter((u) => u.id !== id);
    },
  },
});
