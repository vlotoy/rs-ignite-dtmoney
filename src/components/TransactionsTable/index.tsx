import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { TransactionItem } from '../TransactionItem';
import { Container } from './styles';

export interface Transaction {
  id: number,
  title: string,
  amount: number,
  type: string,
  category: string,
  createdAt: Date
}

export function TransactionTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(({ data }) => setTransactions(data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => 
            <TransactionItem key={transaction.id} transaction={transaction} />
          )}
        </tbody>
      </table>
    </Container>
  )
}