import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

export interface Transaction {
  id: number,
  title: string,
  amount: number,
  transactionType: string,
  category: string,
  createdAt: Date
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionContextData {
  transactions: Transaction[]
  createNewTransaction: (transaction: TransactionInput) => void
}

export const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(({ data }) => setTransactions(data.transactions))
  }, [])

  function createNewTransaction(transaction: TransactionInput) {
        api.post('/transactions', transaction)
  }
  
  return(
    <TransactionsContext.Provider value={{ transactions, createNewTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}