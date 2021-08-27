import { Transaction } from '../TransactionsTable';

interface TransactionItemProps {
  transaction: Transaction
}

export function TransactionItem({ transaction }: TransactionItemProps) {
  return (
    <tr>
      <td>{transaction.title}</td>
      <td className={transaction.type}>{transaction.amount}</td>
      <td>{transaction.category}</td>
      <td>{transaction.createdAt}</td>
    </tr>
  )
}