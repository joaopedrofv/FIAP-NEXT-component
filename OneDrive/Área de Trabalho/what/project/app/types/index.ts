export interface CashFlow {
  date: string;
  description: string;
  credit: number;
  debit: number;
  balance: number;
}

export interface CardExpense {
  date: string;
  description: string;
  debit: number;
}

export interface Check {
  date: string;
  description: string;
  processDate: string;
  amount: number;
}

export type FinancialRecord = CashFlow | CardExpense | Check;