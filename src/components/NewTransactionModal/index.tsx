import Modal from 'react-modal';
import { Container } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTrasationModal({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) {
  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

    <Container>
      <h2>Cadastrar Operação</h2>

      <input type="text" name="title" id="title" placeholder="Título"/>

      <input type="number" name="amount" id="amount" placeholder="Valor"/>

      <input type="text" name="category" id="category" placeholder="Categoria"/>

      <button type="submit">Cadastrar</button>
    </Container>
    </Modal>
  )
}