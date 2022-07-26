import { Type } from "./Type";
import { Address } from "./Address";
import { Balance } from "./Balance";


export interface CourtAndInsolvency {
  name: string;
  dob: Date;
  courtName: string;
  contextKey: string;
  dischargeDate?: Date;
  caseReference: string;
  amount: Balance;
  address: Address;
  type: Type;
  startDate: Date;
}
