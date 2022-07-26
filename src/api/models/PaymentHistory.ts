import { PaymentStatus } from "./PaymentStatus";


export interface PaymentHistory {
  month: number;
  paymentStatus: PaymentStatus;
  year: number;
}
