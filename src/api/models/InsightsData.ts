import { Account } from "./Account";
import { Personal } from "./Personal";


export interface InsightsData {
  accounts: Account[];
  personal: Personal;
}
