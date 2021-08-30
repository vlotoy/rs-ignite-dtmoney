import { useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';
import { TransactionItem } from '../TransactionItem';
import { Container } from './styles';

export function TransactionTable() {
  const { transactions } = useContext(TransactionsContext)

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