import { Address } from "./Address";
import { Overview } from "./Overview";
import { PaymentHistory } from "./PaymentHistory";


export interface Account {
  accountCategory: string;
  accountNumber: string;
  address: Address;
  contentKey: string;
  displayName: string;
  key: string;
  name: string;
  overview: Overview;
  paymentHistory: PaymentHistory[];
  status: string;
  supplierName: string;
}
