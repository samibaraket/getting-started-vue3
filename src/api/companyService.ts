import { Company } from "@/types/Company.js";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api/companies"
});

export const companyService = {
   async getAll(): Promise<Company[]> {
       const { data } = await api.get<Company[]>("");
       return data;
     },
     async create(company: Omit<Company, "id">): Promise<Company> {
       const { data } = await api.post<Company>("/add", company);
       return data;
     },
     async update(company: Partial<Company>): Promise<Company> {
       const { data } = await api.put<Company>(`/update`, company);
       return data;
     },
     async remove(id: number): Promise<void> {
       await api.delete(`/${id}`);
     }, 
}