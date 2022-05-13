import { Category } from "./Category";
import { Currency } from "./enums/Currency";
import { PaymentType } from "./enums/PaymentType";

export interface Transaction {
  id: string;
  amount: number;
  category: Category;
  currency: Currency;
  lastUpdated: Date;
  paymentTimestamp: Date;
  paymentType: PaymentType;
}
