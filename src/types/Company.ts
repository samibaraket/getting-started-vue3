import { Address } from "./Address.js";
import { User } from "./User.js";

export interface Company {
  id: number;
  name: string;
  creationDate: Date;
  rcsNumber: string;
  status: Status;
  address: Address;
  users: User[];
}

export enum Status {
  ACTIVE = "active",
  INACTIVE = "inactive",
  PENDING = "pending",
}