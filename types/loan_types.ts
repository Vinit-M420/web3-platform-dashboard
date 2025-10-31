export interface LoanDetail {
  id: string;
  borrower: string;
  asset: string;
  amount: number;
  collateral: number;
  interestRate: number;
  startDate: string;
  endDate: string;
  status: 'Active' | 'Closed' | 'Liquidated';
}

export const dummyLoanDetails: LoanDetail[] = [
  {
    id: 'LN001',
    borrower: '0xA1B2C3D4E5F6',
    asset: 'ETH',
    amount: 10,
    collateral: 20,
    interestRate: 5.5,
    startDate: '2024-10-10',
    endDate: '2025-10-10',
    status: 'Active',
  },
  {
    id: 'LN002',
    borrower: '0xF6E5D4C3B2A1',
    asset: 'BTC',
    amount: 0.5,
    collateral: 1.0,
    interestRate: 4.2,
    startDate: '2025-01-15',
    endDate: '2026-01-15',
    status: 'Closed',
  },
];

export const LoanColumnNames = [
  { column: 'Loan ID' },
  { column: 'Borrower' },
  { column: 'Asset' },
  { column: 'Amount' },
  { column: 'Collateral Posted' },
  { column: 'Interest Rate (%)' },
  { column: 'Start Date' },
  { column: 'End Date' },
  { column: 'Status' },
];
