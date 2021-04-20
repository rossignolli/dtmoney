import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global'
import Modal from 'react-modal'
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionsModal';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionsModal(){
      setIsNewTransactionModalOpen(true);
  }

  function handlecloseNewTransactionsModal(){
      setIsNewTransactionModalOpen(false)
  }


  return (
    <TransactionsProvider>
      <Header onOpenNewTransationModal={handleOpenNewTransactionsModal} />
        <Dashboard/>
        <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handlecloseNewTransactionsModal}
        />
      <GlobalStyle/>
    </TransactionsProvider>
  );
}

export default App;


