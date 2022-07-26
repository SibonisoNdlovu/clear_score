import { Balance } from "./Balance";


export interface Overview {
  lastUpdated: Date;
  utilization?: number;
  balance: Balance;
  frequency: string;
  limit?: Balance;
  accountOpened: Date;
}
