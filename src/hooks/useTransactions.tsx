import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

export interface Transaction {
  id: number
  title: string
  amount: number
  transactionType: string
  category: string
  createdAt: Date
}

type TransactionInput = Omit<Transaction, 'id'>

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionContextData {
  transactions: Transaction[]
  createNewTransaction: (transaction: TransactionInput) => Promise<void>
}

const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(({ data }) => setTransactions(data.transactions))
  }, [])

  async function createNewTransaction(transactionInput: TransactionInput) {
    const { data } = await api.post('/transactions', transactionInput)
    const { transaction } = data

    setTransactions([...transactions, transaction])
  }
  
  return(
    <TransactionsContext.Provider value={{ transactions, createNewTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}

