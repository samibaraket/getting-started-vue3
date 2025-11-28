import { Address } from "./Address.js";
import { User } from "./User.js";

export interface Company {
  id: number;
  name: string;
  address: Address;
  users: User[];
}