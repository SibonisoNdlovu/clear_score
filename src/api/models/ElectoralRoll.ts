import { Address } from "./Address";


export interface ElectoralRoll {
  address: Address;
  contextKey: string;
  current: boolean;
  endDateString: string;
  name: string;
  startDateString: string;
  supplied: string;
}
